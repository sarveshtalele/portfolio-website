# Setup and Deployment Guide

This guide provides step-by-step instructions for setting up the project locally, deploying it to Vercel, and restoring it from GitHub if your local files are lost.

## 1. Local Setup Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (v18 or higher recommended).
- **Git**: Ensure Git is installed for version control.

### Steps
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/sarveshtalele/portfolio-website.git
    cd portfolio-website
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Environment Variables**:
    - Create a `.env` file in the root directory.
    - Copy the contents from `.env.example` and fill in your values:
      ```bash
      VITE_EMAILJS_SERVICE_ID="your_service_id"
      VITE_EMAILJS_TEMPLATE_ID="your_template_id"
      VITE_EMAILJS_PUBLIC_KEY="your_public_key"
      VITE_GEMINI_API_KEY="your_gemini_api_key" # Required for local AI functionality
      ```
4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---

## 2. Vercel Deployment

### Deploying for the First Time
1.  **Push Code to GitHub**: Ensure your latest code is committed and pushed to your GitHub repository.
2.  **Connect to Vercel**:
    - Go to [Vercel](https://vercel.com/) and log in.
    - Click **"Add New"** > **"Project"**.
    - Import your `portfolio-website` repository.
3.  **Configure Project**:
    - **Framework Preset**: Vite.
    - **Root Directory**: `./`.
4.  **Add Environment Variables**:
    - Go to **Project Settings** > **Environment Variables**.
    - Add the variables from your `.env` file (EmailJS keys and Gemini API key).
5.  **Deploy**: Click **"Deploy"**. Vercel will automatically build and host your site.

### Automatic Redeployment
Vercel is connected to your GitHub repository. Every time you push changes to the `main` branch, Vercel will automatically trigger a new deployment.

---

## 3. Restoration Steps (If Local Folder is Deleted)

If your local project folder is accidentally deleted, follow these steps to restore everything and reconnect to Vercel:

1.  **Re-clone from GitHub**:
    ```bash
    git clone https://github.com/sarveshtalele/portfolio-website.git
    cd portfolio-website
    ```
2.  **Re-install Node Modules**:
    ```bash
    npm install
    ```
3.  **Restore `.env` File**:
    - Since `.env` files are not pushed to GitHub for security, you must recreate it using the keys you saved (or fetch them from your Vercel Project Settings).
4.  **Verify Vercel Connection**:
    - Your Github repository is already connected to Vercel. Simply pushing a commit will verify the connection:
      ```bash
      git commit -am "Restoration check" --allow-empty
      git push origin main
      ```
    - Check the Vercel dashboard to see the live deployment.

---

## 4. Troubleshooting
- **CSS Not Loading**: Ensure Tailwind CSS is correctly initialized (usually handled by Vite).
- **API Errors**: Check that your Environment Variables on Vercel match the keys from EmailJS and Google Gemini.
- **Port Conflict**: If port 3000 is in use, you can change it in `vite.config.js`.
