import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuthContext } from "./useAuthContext";
import currentTheme from "../globals/currentTheme";

export const useLogin = () => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const theme = currentTheme();

  const notify = (state) => {
    if (state === "success") {
      toast.success("Login Berhasil!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme,
      });
    } else if (state === "error") {
      toast.error("Login Gagal!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme,
      });
    }
  };

  const login = async (user, password, isDoctor) => {
    setIsLoading(true);
    setErrors(null);

    let response;

    if (isDoctor) {
      const email = user;

      response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/auth/doctor-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
    } else {
      response = await fetch(import.meta.env.VITE_BACKEND_URL + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });
    }

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setErrors(data.message || response);
      notify("error");
      navigate("/login");
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));

      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
      notify("success");
      navigate("/");
    }
  };

  return { login, isLoading, errors };
};
