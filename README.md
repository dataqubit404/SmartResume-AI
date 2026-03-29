# 📄 SmartResume AI: The Intelligent Career Builder

**ResumeAI** is a high-performance Next.js application that transforms the tedious process of resume building into an AI-powered experience. Leveraging **Google Gemini 1.5 Flash**, the app parses raw text, provides real-time coaching, and analyzes your resume for ATS optimization.

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---
### Live Demo : 

---

## 🚀 Key Features

* **🤖 AI Resume Parsing:** Upload `.txt` or `.docx` files. Our AI bridge extracts your experience, skills, and education into a structured format instantly.
* **💬 AI Career Coach:** A dedicated chat interface for resume optimization, bullet point rewriting, and career advice.
* **📊 Instant Analysis:** Get a professional grade for your resume with identified missing keywords and actionable improvement suggestions.
* **🎯 Smart Job Matcher:** Match your profile against job descriptions to see your "Fit Score" and skill gaps.
* **🖨️ Professional PDF Export:** Custom `@media print` CSS ensures a clean, one-page, ATS-friendly PDF download.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14/15 (App Router), React, Tailwind CSS.
* **AI Engine:** Google Gemini 1.5 Flash (via Generative Language API).
* **Backend:** Next.js API Routes (Secure Server-Side Bridge).
* **Parsing:** Mammoth.js (Word Document to Text conversion).

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

## ⚠️ Troubleshooting
"Method doesn't allow unregistered callers (403)"
This usually means your .env.local file was created while the server was running.

Fix: Stop your terminal (Ctrl + C) and run npm run dev again to refresh the environment variables.

"Model not found"
Google frequently updates model names. If the API fails, check src/app/api/chat/route.js and ensure the URL uses gemini-1.5-flash-latest.

--- 

## 🛡️ License
Distributed under the MIT License. See LICENSE for more information.
