# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


he extension detects the Gmail compose window in real-time and injects a “Generate AI Email” button. When clicked, it extracts the email content from the thread, sends it to a Spring Boot backend API, and generates a context-aware reply using a generative AI model (Google Gemini). The generated response is then displayed directly in the compose box for quick editing and sending.

🛠️ Tech Stack
Frontend: JavaScript (Chrome Extension APIs, DOM Manipulation)
Backend: Spring Boot (Java)
API Integration: Google Gemini API (Generative AI)
Communication: REST API (Fetch)
Deployment: Docker (Containerized backend)
⚡ Key Features
🔍 Detects Gmail compose window dynamically using MutationObserver
✨ Injects AI-powered “Generate Email” button inside Gmail UI
📩 Extracts email content automatically from thread
🎯 Generates replies with customizable tone (e.g., professional, friendly)
🔄 Real-time API communication between extension and backend
🐳 Containerized backend using Docker for easy deployment

💡 Use Case

This tool is useful for:

Writing professional replies quickly
Reducing time spent on repetitive emails
Assisting users with better email phrasing and tone
🧠 How It Works (Simple Flow)
User opens Gmail compose
Extension detects compose box
User clicks “Generate AI Email”
Email content → sent to backend API
Backend → calls Gemini API
AI response → returned → shown in Gmail
