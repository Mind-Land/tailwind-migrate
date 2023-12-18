import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

// Animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
