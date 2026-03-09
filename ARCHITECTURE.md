# Project Architecture: Portfolio Website

This document provides a comprehensive overview of the project architecture and the significance of each file within the codebase.

## High-Level Architecture

The project is built using a modern frontend stack with **React**, **Vite**, and **Tailwind CSS**. It also incorporates **Vercel Serverless Functions** for backend logic (e.g., Gemini AI integration, contact form handling).

```mermaid
graph TD
    User([User Browser]) --> Frontend[React Frontend - Vite]
    Frontend --> Assets[Public Assets / Icons]
    Frontend --> Logic[src/App.jsx - Navigation & Routing]
    Logic --> Home[src/pages/Home.jsx]
    Logic --> Journey[src/pages/Journey.jsx]
    Logic --> Projects[src/pages/Projects.jsx]
    Logic --> Knowledge[src/pages/Knowledge.jsx]
    Logic --> Blogs[src/pages/Blogs.jsx]
    Logic --> Contact[src/pages/Contact.jsx]
    
    Frontend --> API_Client[src/api.js]
    API_Client --> Gemini_API[/api/gemini]
    Contact --> Contact_API[/api/contact]
    
    Gemini_API --> Google_Gemini[Google Gemini API]
    Contact_API --> EmailJS[EmailJS]
```

## File Significance Table

| File / Directory | Type | Significance |
| :--- | :--- | :--- |
| `api/` | Directory | Contains serverless functions for backend operations on Vercel. |
| `api/contact.js` | File | Handles contact form submissions and integrates with EmailJS. |
| `api/gemini.js` | File | Proxies requests to Google Gemini API to keep API keys secure. |
| `public/` | Directory | Static assets like the profile picture and favicons. |
| `src/` | Directory | Main source code for the React application. |
| `src/components/` | Directory | Reusable UI components used across multiple pages. |
| `src/components/Shared.jsx`| File | Common components like `BreathingBackground` and `ContactButtons`. |
| `src/pages/` | Directory | Top-level page components for each section of the website. |
| `src/pages/Home.jsx` | File | The Overview page, featuring bio, stats, and skills. |
| `src/pages/Journey.jsx` | File | Interactive timeline of professional experience. |
| `src/pages/Projects.jsx` | File | Showcases AI and Engineering projects with GitHub links. |
| `src/pages/Knowledge.jsx` | File | Highlights research papers and publications. |
| `src/pages/Blogs.jsx` | File | Lists Medium articles and blog posts. |
| `src/pages/Contact.jsx` | File | Professional contact form and AI-powered interaction. |
| `src/App.jsx` | File | Main application component, handles routing and navigation. |
| `src/api.js` | File | Frontend interface for calling backend APIs (Gemini). |
| `src/data.js` | File | Centralized data store (MOCK_CMS) for all website content. |
| `src/index.css` | File | Global styles including Tailwind directives and custom glassmorphism effects. |
| `src/main.jsx` | File | Entry point for the React application. |
| `index.html` | File | Main HTML template and metadata (SEO). |
| `package.json` | File | Project dependencies and script definitions (npm). |
| `vite.config.js` | File | Configuration for the Vite build tool and plugins. |
| `.env.example` | File | Template for required environment variables. |

## Mobile Responsiveness

The project uses a mobile-first approach with Tailwind CSS responsive utilities.

| Feature | Responsible File(s) | Key Implementation |
| :--- | :--- | :--- |
| Navigation | `src/App.jsx` | Floating rounded nav with `overflow-x-auto` for small screens. |
| Hero Section | `src/pages/Home.jsx` | Stacked layout (`flex-col`) on mobile, side-by-side (`md:flex-row`) on desktop. |
| Dashboard Metrics | `src/pages/Home.jsx` | Grid adapts from 2 columns (`grid-cols-2`) to 4 columns (`md:grid-cols-4`). Padding and text size reduce on mobile. |
| Skills Cloud | `src/pages/Home.jsx` | Flex-wrap with dynamic font sizes. |
| AI Pitcher | `src/pages/Home.jsx` | Responsive input fields and stacked buttons on small screens. |

---

## Key Features

1.  **Dynamic Rendering**: Content is managed in `data.js`, making updates simple without touching UI code.
2.  **Glassmorphism Design**: Use of backdrop-blur and semi-transparent layers for a premium, modern feel.
3.  **Agentic AI Interaction**: Integration with Gemini for personalized visitor engagement.
4.  **Responsive Layout**: Fully optimized for mobile and desktop using Tailwind CSS.
