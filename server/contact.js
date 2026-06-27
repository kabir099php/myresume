import nodemailer from "nodemailer";

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

/**
 * POST /api/contact
 * Validates the form and, if SMTP env vars are configured, emails the message.
 * Without SMTP config it simply logs the submission (so the site works out of
 * the box). See .env.example for setup.
 */
export async function handleContact(req, res) {
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

  // No SMTP configured → log and succeed so the form still works in dev.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[contact] New message (SMTP not configured):", {
      name,
      email,
      message: message.slice(0, 200),
    });
    return res.json({ ok: true, delivered: false });
  }

  try {
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

    return res.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err.message);
    return res.status(500).json({ ok: false, error: "Failed to send message." });
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}
