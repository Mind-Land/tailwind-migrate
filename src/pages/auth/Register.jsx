import { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import registerhero from "/img/hero/login.png"

import { useRegister } from "../../hooks/useRegister";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const { register, isLoading, errors } = useRegister();

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    setPassword(newPassword);
    setValidPassword(passwordRegex.test(newPassword));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await register(username, email, password);
  };

  return (
    <>
      {isLoading && (
        <div className="absolute top-1/2 lg:left-[47%] left-[45%] w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      )}
      <div className="h-screen flex flex-row-reverse items-center justify-center">
        <div className="absolute top-0 left-0 p-6 md:p-8 xl:p-12">
          <Link
            to="/login"
            className="rounded-lg p-4 text-white bg-color-primary-500 hover:bg-color-primary-800 md:bg-color-primary-500 md:hover:bg-color-primary-800 md:text-white"
            type="submit"
          >
            <HiArrowSmLeft />
          </Link>
        </div>
        <div className="h-screen bg-color-primary-400 dark:bg-color-primary-700 w-full hidden lg:flex items-center justify-center">
          <img className="w-2/4" src={registerhero} alt="" />
        </div>
        <div className="bg-white dark:bg-gray-900 h-screen w-full px-6 flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <img className="w-12" src="./public/img/Logo-noText.png" alt="" />
            <h1 className="max-w-2xl text-color-primary-500 font-bold mt-5 mb-3 dark:text-white">
              Selamat datang di Mindland
            </h1>
            <p className="text-xs dark:text-white">Buat akun Anda</p>
          </div>
          <div className="w-full bg-white  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan username anda"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan email anda"
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
                    placeholder="Masukkan password anda"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 $"
                    onChange={handlePasswordChange}
                    required
                  />
                  {!validPassword && password.length > 0 && (
                    <p className="text-color-warning-700 dark:text-color-warning-200 text-sm mt-2">
                      Password harus mengandung 1 huruf kapital, 8 karakter, dan
                      1 atau 2 angka.
                    </p>
                  )}
                  {errors && (
                    <p className="text-color-danger-700 dark:text-color-warning-200 text-sm mt-2">
                      {errors}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-color-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Daftar
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Sudah punya akun?{" "}
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
}

export default Register;
