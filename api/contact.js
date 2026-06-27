// Vercel serverless function: POST /api/contact
// Mirrors server/contact.js. Without SMTP env vars it logs the submission and
// returns { ok: true, delivered: false } so the form works out of the box.
// Set SMTP_HOST / SMTP_USER / SMTP_PASS (and optionally SMTP_PORT, CONTACT_TO)
// as Vercel Environment Variables to actually receive emails.

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const { name = "", email = "", message = "" } = req.body || {};

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ ok: false, error: "All fields are required." });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email." });
  }
  if (message.length > 5000) {
    return res.status(400).json({ ok: false, error: "Message is too long." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  // No SMTP configured → log and succeed so the form still works.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[contact] New message (SMTP not configured):", {
      name,
      email,
      message: message.slice(0, 200),
    });
    return res.status(200).json({ ok: true, delivered: false });
  }

  try {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    return res.status(200).json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err.message);
    return res.status(500).json({ ok: false, error: "Failed to send message." });
  }
};
