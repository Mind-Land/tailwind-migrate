"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import HeroRegister from "../../assets/lottie/Register.json";

function Register() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setValidPassword(validatePassword(newPassword));
    setPasswordsMatch(newPassword === repeatPassword);
  };

  const handleRepeatPasswordChange = (event) => {
    const newRepeatPassword = event.target.value;
    setRepeatPassword(newRepeatPassword);
    setPasswordsMatch(newRepeatPassword === password);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  return (
    <>
      <div className="h-screen flex flex-row items-center justify-center">
        <div className="h-screen bg-color-primary-400 dark:bg-color-primary-700 w-full hidden lg:flex items-center justify-center">
          <Lottie animationData={HeroRegister} alt="hero" />
        </div>
        <div className="dark:bg-gray-900  h-screen w-full px-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-10">
            <img className="w-12" src="./public/img/Logo-noText.png" alt="" />
            <h1 className="max-w-2xl text-color-primary-500 mb-4 font-bold tracking-tight leading-none md:text-sm lg:text-base xl:text-3xl dark:text-white">
              Create an account
            </h1>
            <p className="md:text-sm  dark:text-white">
              Please enter your details.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-4  hover:border-color-primary-900">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required
                placeholder="password"
                onChange={handlePasswordChange}
              />
              {!validPassword && password.length > 0 && (
                <p className="text-color-warning-700 dark:text-color-warning-200 text-sm mt-2">
                  Password must contain 1 uppercase letter, 8 characters, and 1
                  or 2 digits.
                </p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repeat Password" />
              </div>
              <TextInput
                id="repeat-password"
                type="Password"
                placeholder="confirm password"
                required
                onChange={handleRepeatPasswordChange}
              />
              {!passwordsMatch && repeatPassword.length > 0 && (
                <p className="text-color-warning-700 dark:text-color-warning-200 text-sm mt-2">
                  Passwords do not match.
                </p>
              )}
            </div>

            <Button color="primary">Submit</Button>
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                style={{ background: "none", border: "none" }}
                className="dark:text-white"
                type="submit"
              >
                Masuk
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
