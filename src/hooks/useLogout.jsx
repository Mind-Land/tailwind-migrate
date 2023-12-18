import { toast } from "react-toastify";

import { useAuthContext } from "./useAuthContext";
import currentTheme from "../globals/currentTheme";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const theme = currentTheme();

  const logout = () => {
    try {
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });

      toast.success("Berhasil Logout!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
        theme,
      });
    } catch (error) {
      toast.error("Gagal Logout!", {
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

  return { logout };
};
