# 📄 SmartResume AI: The Intelligent Career Builder

**ResumeAI** is a high-performance Next.js application that transforms the tedious process of resume building into an AI-powered experience. Leveraging **Google Gemini 1.5 Flash**, the app parses raw text, provides real-time coaching, and analyzes your resume for ATS optimization.

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---
### Live Demo : 

---

## 🚀 Key Features

* **🤖 Smart Resume Parser:** Upload `.txt` or `.docx` files; the AI automatically extracts experience, skills, and contact info into a structured format.
* **💬 AI Career Coach:** An interactive chat interface providing real-time advice on bullet point impact, tone, and industry standards.
* **📊 Comprehensive Analyzer:** Generates an ATS score (0-100), identifies missing industry keywords, and provides actionable improvement suggestions.
* **🎯 Job Matcher:** Analyzes your resume against job descriptions to provide a "Fit Score" and highlight skill gaps.
* **🖨️ ATS-Optimized PDF Export:** Custom print styles ensure the final document is clean, professional, and free of browser headers/footers.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **Next.js (React)** | Client-side UI, state management, and routing. |
| **Backend** | **Next.js API Routes** | Secure serverless bridge to protect API keys. |
| **AI Engine** | **Google Gemini 1.5 Flash** | Processing resume data and generating coach advice. |
| **Styling** | **Tailwind CSS** | Responsive design and professional document layouts. |
| **Parsing** | **Mammoth.js** | Converting `.docx` files to raw text for AI processing. |
| **Database** | **None (Session-Based)** | Privacy-focused; data is managed in local state, not stored on a server. |
| **Deployment** | **Vercel** | Edge-network hosting for fast global performance. |

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/resume-ai.git](https://github.com/your-username/resume-ai.git)
cd resume-ai
```

### 2. Install dependencies
```bash
npm install
```
### 3. Configure Environment Variables
```bash
Create a file named .env.local in the root directory (the same folder as package.json):
# Get your key at [https://aistudio.google.com/](https://aistudio.google.com/)
GOOGLE_API_KEY=your_actual_api_key_here
```

### 4. Start Development
```bash
npm run dev
Navigate to http://localhost:3000 to see the app in action.
```
---
## Project Structure

```bash
resume-ai-app/                 # Your renamed root folder
├── .env.local                 # 🔑 YOUR API KEY (Hidden from Git)
├── .gitignore                 # 🛡️ THE SHIELD (Prevents leaks/bloat)
├── package.json               # 📦 List of libraries (Mammoth, Next, etc.)
├── next.config.mjs            # ⚙️ Next.js configuration
├── public/                    # 🖼️ Static assets (Logos/Images)
│   └── favicon.ico
└── src/
    └── app/
        ├── layout.js          # 🏠 Main Wrapper (Change Title here)
        ├── globals.css        # 🎨 Global styles & @media print rules
        ├── page.js            # 💻 THE FRONTEND (Builder, Coach, AI Logic)
        └── api/
            └── chat/
                └── route.js   # 🛰️ THE BACKEND (Secure Gemini Bridge)

```

---

## 📖 Usage Guide

Generating the Perfect PDF

To get a professional document without UI elements (buttons, sidebars):

Click Download PDF.

In the Print Dialog:

Destination: Save as PDF.

Margins: None.

Headers/Footers: Uncheck.

Document Uploads

The AI works best with clean text. While .docx is supported via Mammoth.js, for the most accurate parsing, we recommend uploading .txt files.

---

### **Quick Answers:**

* **Is a Database used?** No. I chose a **State-Managed architecture** to prioritize user privacy. The data is handled in the browser's memory and passed to the AI via secure requests. This makes the app "Serverless" and lightweight.
* **Is there a Backend?** Yes. I used **Next.js API Routes (Serverless Functions)**. This is a "Backend-as-a-Service" approach that allows us to securely use the Gemini API key without exposing it to the public.
* **Is there a Frontend?** Yes. It is a **React-based SPA (Single Page Application)** built within the Next.js framework, using Tailwind CSS for a modern, responsive UI.

---

## ⚠️ Troubleshooting
"Method doesn't allow unregistered callers (403)"
This usually means your .env.local file was created while the server was running.

Fix: Stop your terminal (Ctrl + C) and run npm run dev again to refresh the environment variables.

"Model not found"
Google frequently updates model names. If the API fails, check src/app/api/chat/route.js and ensure the URL uses gemini-1.5-flash-latest.

--- 

## 🛡️ License
Distributed under the MIT License. See LICENSE for more information.
