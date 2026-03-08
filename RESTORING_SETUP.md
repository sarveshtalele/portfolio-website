# Restoring Your Project After Formatting Your Mac

Yes, you can absolutely restore your project and deployment setup easily because your code is stored on GitHub.

## 1. Prerequisites
Once your Mac is fresh, you'll need to install a few things:
- **Node.js**: [Download](https://nodejs.org/) (this includes `npm`).
- **Git**: [Download](https://git-scm.com/downloads) (or install via Xcode/Homebrew).

## 2. Re-cloning the Repository
Open your Terminal and run:
```bash
git clone https://github.com/sarveshtalele/portfolio-website.git
cd "portfolio-website"
```
> [!NOTE]
> Since you are using HTTPS, you may be prompted for your GitHub credentials. You should use a **Personal Access Token (PAT)** for authentication.

## 3. Local Environment Setup
Re-install the dependencies:
```bash
npm install
```

## 4. Deployment Setup (Vercel)
If you were using Vercel, it likely automatically deploys your project whenever you push to the `main` branch. 
- You **do not** need to re-configure the deployment on Vercel itself.
- If you want to use the **Vercel CLI** locally:
    1.  Install it: `npm i -g vercel`
    2.  Log in: `vercel login`
    3.  Link your project: `vercel link`

## 5. Environment Variables
Check if you had any `.env` secrets (like `EMAILJS` keys). These are **not** stored on GitHub for security, so you'll need to recreate your `.env` file locally:
1.  Copy `.env.example` to `.env`.
2.  Fill in the values from your Vercel Dashboard (Settings > Environment Variables) or from your memory.
