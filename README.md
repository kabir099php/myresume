# Kabir Patel — Freelance Developer Portfolio

A modern, dark-themed single-page portfolio for **Kabir Patel**, Full Stack Developer & Team Lead.

- **Frontend:** React 19 + Vite 6 (custom CSS, no build-time framework lock-in)
- **Backend:** Node.js + Express 5 (single server serving the built app + a contact API)
- **Deploy model:** one Node process serves both the static site and `/api/*`

---

## Project structure

```
Portfolio/
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── data/portfolio.js   ← all your content lives here
│   │   ├── components/Icon.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── public/
├── server/              # Express server (serves client/dist + API)
│   ├── index.js
│   ├── contact.js
│   └── .env.example
├── Dockerfile
├── ecosystem.config.cjs # PM2
└── deploy/nginx.conf.example
```

## Edit your content

Everything you'll want to change is in **`client/src/data/portfolio.js`** — name, email,
phone, location, social links, summary, services, skills, projects, and experience.
Update the placeholder email / phone / social URLs there before deploying.

To add a downloadable résumé, drop a PDF at `client/public/Kabir-Patel-Resume.pdf`.

---

## Run locally

Requires **Node 20+**.

```bash
# from the Portfolio/ root
npm run install:all      # installs root, client, and server deps

# Option A — full production preview (one server)
npm run build            # builds client/dist
npm start                # serves on http://localhost:5000

# Option B — live dev with hot reload (two terminals)
npm run dev:server       # API on :5000
npm run dev:client       # Vite on :5173 (proxies /api to :5000)
```

Open http://localhost:5000 (Option A) or http://localhost:5173 (Option B).

---

## Contact form email (optional)

The `/api/contact` endpoint works out of the box — without SMTP configured it just
logs submissions. To actually receive emails, copy `server/.env.example` to
`server/.env` and fill in your SMTP credentials (Gmail app password, SendGrid,
Mailgun, etc.).

---

## Deploy to a server (single Node process)

On an Ubuntu VPS (DigitalOcean, AWS EC2, Hetzner, etc.):

```bash
# 1. Install Node 20+ and PM2
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

# 2. Get the code & build
git clone <your-repo> kabir-portfolio && cd kabir-portfolio
npm run install:all
npm run build

# 3. (optional) configure email
cp server/.env.example server/.env && nano server/.env

# 4. Start with PM2 and keep it running on reboot
pm2 start ecosystem.config.cjs
pm2 save && pm2 startup
```

Then put **Nginx** in front for your domain + HTTPS:

```bash
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/kabir-portfolio
# edit server_name -> your domain
sudo ln -s /etc/nginx/sites-available/kabir-portfolio /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com   # free SSL
```

Your site is now live at `https://your-domain.com`.

### Or deploy with Docker

```bash
docker build -t kabir-portfolio .
docker run -d -p 5000:5000 --env-file server/.env --name portfolio kabir-portfolio
```

This runs the same single-server setup in a container on port 5000.
