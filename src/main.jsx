import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import ThemeProvider from "./providers/ThemeProvider.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import ToastProvider from "./providers/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ToastProvider>
      <ThemeProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </ThemeProvider>
    </ToastProvider>
  </AuthProvider>
);
