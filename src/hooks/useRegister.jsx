import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuthContext } from "./useAuthContext";
import currentTheme from "../globals/currentTheme";

export const useRegister = () => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const theme = currentTheme();

  const notify = (state) => {
    if (state === "success") {
      toast.success("Register Berhasil!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme,
      });
    } else if (state === "error") {
      toast.error("Register Gagal!", {
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

  const register = async (username, email, password, isDoctor) => {
    setIsLoading(true);
    setErrors(null);

    let response;

    if (username === undefined && isDoctor) {
      const { firstName, lastName, jenisKelamin } = isDoctor;

      response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/auth/doctor-register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
            jenisKelamin,
          }),
        }
      );
    } else {
      response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
    }

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setErrors(data.message || response);
      notify("error");
      navigate("/register");
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));

      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
      notify("success");
      navigate("/");
    }
  };

  return { register, isLoading, errors };
};
