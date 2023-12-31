"use client";

import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import hero from "/img/hero/logindoctor.png";

import { useLogin } from "../../../hooks/useLogin";
import { AuthContext } from "../../../context/AuthContext";

const DoctorLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const { login, isLoading, errors } = useLogin();
  const { user: userContext } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    setPassword(newPassword);
    setValidPassword(passwordRegex.test(newPassword));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(user, password, true);
  };

  useEffect(() => {
    if (userContext) {
      navigate("/");
    }
  }, [userContext, navigate]);

  return (
    <>
      {isLoading && (
        <div className="absolute top-1/2 lg:left-[47%] left-[45%] w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      )}
      <div className="h-screen flex items-center justify-center">
        <div className="top-0 left-0 p-8 md:p-12 xl:p-12 absolute">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg p-4 text-white bg-color-primary-500 hover:bg-color-primary-800  xl:text-color-primary-500 xl:bg-gray-100 xl:hover:bg-gray-400 xl:hover:text-color-primary-100 md:bg-color-primary-500 md:hover:bg-color-primary-800 md:text-white "
          >
            <HiArrowSmLeft />
          </button>
        </div>
        <div className="h-screen bg-color-primary-400 dark:bg-color-primary-700 w-full hidden lg:flex items-center justify-center ">
          <img
            className="w-3/5 -scale-x-100"
            src={hero}
            alt="login hero image"
          />
        </div>
        <div className="bg-white dark:bg-gray-900 h-screen w-full px-6 flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <img className="w-12" src="./public/img/Logo-noText.png" alt="" />
            <h1 className="max-w-2xl text-color-primary-500 font-bold mt-5 mb-3 dark:text-white">
              Selamat datang di Mindland
            </h1>
            <p className="text-xs dark:text-white">Login sebagai dokter</p>
          </div>
          <div className="w-full bg-white  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nama@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handlePasswordChange}
                    required
                  />
                  {!validPassword && password.length > 0 && (
                    <p className="text-color-warning-700 dark:text-color-warning-200 text-sm mt-2">
                      Password harus mengandung 1 huruf kapital, 8 karakter, 1
                      simbol dan 1 atau 2 angka.
                    </p>
                  )}
                  {errors && (
                    <p className="text-color-warning-700 dark:text-color-warning-200 text-sm mt-2">
                      {errors}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Ingat Saya
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-white"
                  >
                    <Link to="/Reset">Lupa Sandi?</Link>
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-color-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Masuk
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Belum mempunyai akun?{" "}
                  <Link
                    to="/doctorregister"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Daftar sekarang
                  </Link>
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Kamu pengguna?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Masuk disini
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorLogin;
