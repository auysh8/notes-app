# Secure Notes Platform 🔒

**Your thoughts, encrypted. Always.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A **zero-knowledge**, end-to-end encrypted notes platform where **only you** can access your data. Built with modern security practices, Secure Notes Platform ensures your sensitive information stays private—whether it's personal thoughts, passwords, or confidential work notes.

---

## 🔍 Project Overview

In an era where data breaches are common, most note-taking apps store your data in plaintext on their servers. **Secure Notes Platform** solves this by:

- **Encrypting notes on the client side** before they leave your device.
- Using **AES-256-GCM** for strong, authenticated encryption.
- Never storing your encryption key—only you have access.
- Providing a clean, intuitive UI with **real-time sync** across devices.

Your notes are **yours alone**. Not even the server can read them.

---

## ✨ Key Features

- 🔐 **End-to-End Encryption** – Notes encrypted before leaving your device.
- 🔑 **Zero-Knowledge Architecture** – Server never sees your key or plaintext data.
- 📱 **Cross-Platform Sync** – Access notes securely from any device.
- 🎨 **Modern UI with Tailwind CSS** – Clean, responsive, and fast.
- ⚡ **Real-Time Updates** – Changes sync instantly.
- 🔄 **Offline Support** – Work without internet, sync when online.
- 🛡️ **Secure Authentication** – JWT with HttpOnly cookies.
- 📂 **Folder & Tag Organization** – Keep notes tidy and searchable.

---

## 🏗️ Architecture Diagram

```mermaid
graph TD
    A[Client (Browser)] -->|HTTPS| B[Frontend: React + Vite]
    B -->|User Input| C[Encryption Layer: AES-256-GCM]
    C -->|Encrypted Data| D[Backend: Node.js + Express]
    D -->|Store/Retrieve| E[(MongoDB)]
    D -->|JWT Auth| F[Auth Service]
    A -->|Login/Register| F
    F -->|JWT Token| A
    style A fill:#61DAFB,stroke:#20232A
    style B fill:#61DAFB,stroke:#20232A
    style C fill:#4CAF50,stroke:#2E7D32
    style D fill:#43853D,stroke:#2E5B2B
    style E fill:#4EA94B,stroke:#388E3C
    style F fill:#FF6B6B,stroke:#C62828
```

---

## 📁 Project Structure

<details>
<summary>Click to expand directory tree</summary>

```
secure-notes-platform/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── favicon.ico
│   └── assets/
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── note.controller.ts
│   │   ├── middlewares/
│   │   │   └── auth.middleware.ts
│   │   ├── models/
│   │   │   └── note.model.ts
│   │   ├── routes/
│   │   │   ├── auth.route.ts
│   │   │   └── note.route.ts
│   │   ├── utils/
│   │   │   └── crypto.ts
│   │   └── server.ts
│   ├── .env
│   └── package.json
└── src/
    ├── assets/
    ├── components/
    │   ├── auth/
    │   ├── notes/
    │   ├── ui/
    │   └── layout/
    ├── contexts/
    │   └── AuthContext.tsx
    ├── hooks/
    │   └── useEncryption.ts
    ├── pages/
    │   ├── Home.tsx
    │   ├── Login.tsx
    │   ├── Register.tsx
    │   └── Note.tsx
    ├── services/
    │   ├── api.ts
    │   └── auth.ts
    ├── styles/
    │   └── globals.css
    ├── types/
    │   └── index.ts
    ├── utils/
    │   └── crypto.ts
    └── App.tsx
```

</details>

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or [Atlas](https://www.mongodb.com/atlas/database))

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/auysh8/secure-notes-platform.git
cd secure-notes-platform
```

2. **Install dependencies:**

```bash
npm install
cd server && npm install && cd ..
```

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Server
PORT=5000
MONGODB_URI=mongodb://localhost:27017/secure_notes
JWT_SECRET=your_very_strong_jwt_secret_here
NODE_ENV=development

# Optional: For production
CORS_ORIGIN=http://localhost:5173
```

> ⚠️ **Never commit `.env` to version control.**

### Available Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start frontend (Vite) + backend (Node) in dev mode |
| `npm run build` | Build frontend for production |
| `npm run preview` | Preview production build |
| `cd server && npm run dev` | Run backend only in dev mode |
| `cd server && npm run start` | Run backend in production mode |

### Run the Project

```bash
npm run dev
```

The app will open at `http://localhost:5173` and the server at `http://localhost:5000`.

---

## 📖 Usage

### 1. Register & Login
- Sign up with email and password.
- Your encryption key is derived from your password (never stored).

### 2. Create a Note
- Click "New Note".
- Type your content.
- It's **automatically encrypted** before saving.

### 3. View & Edit
- Only you can decrypt and read your notes.
- Changes sync in real-time.

> 📸 *Screenshots coming soon!*

---

## 🛠️ Tech Stack

| Category | Technologies |
|--------|--------------|
| **Frontend** | React, TypeScript, Vite, Tailwind CSS |
| **Backend** | Node.js, Express, TypeScript |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT (HttpOnly Cookies) |
| **Encryption** | AES-256-GCM (Web Crypto API) |
| **Dev Tools** | ESLint, Prettier, Git |

---

## 🤝 Contributing

Contributions are **welcome and appreciated**! Here's how you can help:

1. **Fork** the repository.
2. Create a **feature branch** (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add amazing feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a **Pull Request**.

### Guidelines

- Follow the existing code style.
- Write clear, concise commit messages.
- Include tests for new features.
- Update documentation as needed.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Pankaj Bhandari**

🔗 [GitHub](https://github.com/auysh8) &nbsp; | &nbsp;
💼 [LinkedIn](https://linkedin.com/in/pankajbhandari2004) &nbsp; | &nbsp;
✉️ [Email](mailto:pankajbhandari0714@gmail.com)

> *"Privacy isn't a feature—it's a right. Let's build it into the web."* — Pankaj