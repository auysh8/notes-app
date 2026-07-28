# Secure Notes Platform 🔒

An end-to-end full-stack notes management application built with TypeScript, React, and Express. Designed for efficiency and privacy, featuring authenticated user workspaces, real-time search, tag filtering, and note state management (active, archived, trash).

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

---

## 📸 Visual Preview

| Dashboard | Authentication |
| :---: | :---: |
| ![Dashboard](https://raw.githubusercontent.com/auysh8/secure-notes-platform/main/src/screenshots/dashboard.png) | ![Login](https://raw.githubusercontent.com/auysh8/secure-notes-platform/main/src/screenshots/login.png) |

---

## ✨ Features

* **🔐 Secure Authentication:** Full user signup and login workflows protected by server-side authentication middleware and JWT tokens.
* **📝 Rich Note Operations:** Create, update, archive, restore, and permanently delete notes seamlessly.
* **🔍 Instant Search & Filters:** Fast client-side searching across note content and titles with sidebar view filtering.
* **🏷️ Organized Workspaces:** Dedicated views for active notes, archived notes, and trash bin navigation.
* **⚡ End-to-End TypeScript:** Type safety guaranteed across the stack from database models to frontend components.
* **🎨 Modular UI Design:** Styled using CSS Modules for clean, non-conflicting component styling.

---

## 📂 Repository Structure

```text
secure-notes-platform/
├── public/
│   └── vite.svg
├── server/
│   ├── controller/
│   │   ├── auth.controller.ts
│   │   └── notes.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── models/
│   │   ├── note.model.ts
│   │   └── user.model.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   └── notes.routes.ts
│   ├── index.ts
│   └── tsconfig.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Logo/
│   │   ├── New Note Button/
│   │   ├── Note Edit View/
│   │   ├── Notes Grid/
│   │   ├── Search bar/
│   │   └── Sidebar/
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   ├── hooks/
│   │   └── useNotes.ts
│   ├── pages/
│   │   ├── AuthPage.tsx
│   │   └── LoadingPage.tsx
│   ├── services/
│   │   └── notesApi.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite, CSS Modules |
| **Backend** | Node.js, Express, TypeScript, REST API |
| **Authentication** | Custom Auth Middleware, Password Hashing, Tokens |
| **Tooling** | ESLint, TypeScript Compiler (tsc) |

---

## 🚀 Quick Start

### Prerequisites

* Node.js (v18.0.0 or higher recommended)
* npm (v9.0.0 or higher)

### Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/auysh8/secure-notes-platform.git
   cd secure-notes-platform
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Start the development servers:**

   * **Run Backend Server:**
     ```bash
     cd server
     npm run dev
     ```

   * **Run Frontend Client (in a separate terminal):**
     ```bash
     npm run dev
     ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:5173`.

---

## 📖 Available Scripts

### Frontend Scripts (Root Directory)

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the Vite frontend development server. |
| `npm run build` | Builds the React frontend application for production. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |
| `npm run preview` | Previews the production build locally. |

### Backend Scripts (`server/` Directory)

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Express server in development mode. |
| `npm run build` | Compiles server TypeScript files to JavaScript. |
| `npm start` | Runs the compiled server in production mode. |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
