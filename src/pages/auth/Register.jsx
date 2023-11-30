"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Register() {
  return (
    <>
      <div className="h-screen flex flex-row items-center justify-center">
        <div className="h-screen bg-color-primary-200 w-full hidden lg:flex items-center justify-center">
          <img
            className="w-2/4 -scale-x-100 w-"
            src="./public/img/hero-image.png"
            alt=""
          />
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
              />
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
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="" id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button
              className="bg-color-primary-500 dark:bg-color-primary-300 dark:hover:bg-color-primary-500 dark:text-black dark:hover:text-white hover:bg-color-primary-100 hover:text-color-primary-900 border hover:border-color-primary-900"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
