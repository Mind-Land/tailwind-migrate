import { useState } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

import hero from "/img/hero/logindoctor.png";
import { useRegister } from "../../../hooks/useRegister";

const DoctorRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, isLoading, errors } = useRegister();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      firstName &&
      lastName &&
      gender &&
      email &&
      password &&
      repeatPassword
    ) {
      // Place your logic to submit the form data here
      console.log("Form submitted successfully!");

      await register(undefined, email, password, {
        firstName,
        lastName,
        jenisKelamin: gender,
      });
    } else {
      setFormSubmitted(true); // Set form as submitted to display validation messages
    }
  };

  return (
    <>
      {isLoading && (
        <div className="absolute top-1/2 lg:left-[47%] left-[45%] w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      )}
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="absolute top-0 left-0 p-8 md:p-8 xl:p-12">
          <Link
            to="/doctorlogin"
            className="rounded-lg p-4 text-white bg-color-primary-500 hover:bg-color-primary-800  xl:text-color-primary-500 xl:bg-gray-100 xl:hover:bg-gray-400 xl:hover:text-color-primary-100 md:bg-color-primary-500 md:hover:bg-color-primary-800 md:text-white"
            type="submit"
          >
            <HiArrowSmLeft />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center h-screen w-full lg:w-1/2 bg-color-primary-400 dark:bg-color-primary-700">
          <img
            className="w-3/5 -scale-x-100"
            src={hero}
            alt="register doctor hero image"
          />
        </div>

        <div className="flex flex-col items-center justify-center h-screen w-full lg:w-1/2 px-4 py-8 bg-white dark:bg-gray-900">
          <div className="flex flex-col items-center mb-6 mt-10">
            {/* Title and description */}
            <h1 className="max-w-2xl font-bold text-color-primary-500 mb-2 text-center dark:text-white">
              Buat akun sebagai dokter
            </h1>
            <p className="text-sm text-center dark:text-white">
              Silakan isi form di bawah ini.
            </p>
          </div>

          <form
            className="flex flex-col gap-3 w-full max-w-md pb-6"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between gap-4">
              <div className="mb-2 block w-full">
                <Label htmlFor="name1" value="Nama Depan" />
                <TextInput
                  id="name1"
                  type="text"
                  placeholder="Masukkan nama depan Anda"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {formSubmitted && !firstName && (
                  <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                    Nama Depan harus di isi
                  </p>
                )}
              </div>

              <div className="mb-2 block w-full">
                <Label htmlFor="name2" value="Nama Belakang" />
                <TextInput
                  id="name2"
                  type="text"
                  placeholder="Masukkan nama belakang Anda"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {formSubmitted && !lastName && (
                  <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                    Nama Belakang harus di isi
                  </p>
                )}
              </div>
            </div>

            <div className="mb-2 block">
              <Label htmlFor="jenisKelamin" value="Jenis Kelamin" />
              <Select
                id="jenisKelamin"
                name="jenisKelamin"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option disabled hidden value="">
                  Pilih Jenis Kelamin
                </option>
                <option value="Laki-laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </Select>
              {formSubmitted && !gender && (
                <p className="text-red-500 text-xs mt-1">Gender is required.</p>
              )}
            </div>

            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="Masukkan alamat email anda"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formSubmitted && !email && (
                <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                  Email harus di isi
                </p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="mb-2 block w-full">
                <Label htmlFor="password2" value="Password" />
                <TextInput
                  id="password2"
                  type="password"
                  required
                  placeholder="Masukkan password anda"
                  onChange={handlePasswordChange}
                  value={password}
                />
                {formSubmitted && !password && (
                  <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                    Kata sandi harus di isi
                  </p>
                )}
                {!validPassword && password && (
                  <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                    Password harus mengandung 1 huruf kapital, 8 karakter, dan 1
                    atau 2 angka
                  </p>
                )}
              </div>

              <div className="mb-2 block w-full">
                <Label htmlFor="repeat-password" value="Konfirmasi Password" />
                <TextInput
                  id="repeat-password"
                  type="password"
                  placeholder="Konfimasi password anda"
                  required
                  onChange={handleRepeatPasswordChange}
                  value={repeatPassword}
                />
                {formSubmitted && !repeatPassword && (
                  <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                    Ulangi kata sandi
                  </p>
                )}
                {!passwordsMatch && repeatPassword && (
                  <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                    Kata sandi tidak sama
                  </p>
                )}
              </div>
            </div>

            {errors && (
              <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                {errors.message || errors}
              </p>
            )}
            <Button type="submit" color="primary" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DoctorRegister;
