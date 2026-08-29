import "./App.css";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./dashboard/Dashboard";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, type ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const isTokenValid = () => {
  const token = localStorage.getItem("token");
  try {
    if (!token) {
      return false;
    }
    const decoded = jwtDecode(token);
    const currTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      return false;
    }
    return true;
  } catch {
    localStorage.removeItem("token");
    return false;
  }
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (isTokenValid()) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

const PublicRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to={"/"} /> : children;
};

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUnauthorized = () => {
      navigate("/login");
    };

    window.addEventListener("unauthorized", handleUnauthorized);
    return () => window.removeEventListener("unauthorized", handleUnauthorized);
  }, [navigate]);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/archive"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/trash"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
