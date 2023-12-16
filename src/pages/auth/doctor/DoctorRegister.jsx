import { useState } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const DoctorRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [katasandi, setkatasandi] = useState("");
  const [validkatasandi, setValidkatasandi] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlekatasandiChange = (event) => {
    const newkatasandi = event.target.value;
    setkatasandi(newkatasandi);
    setValidkatasandi(validatekatasandi(newkatasandi));
  };

  const validatekatasandi = (katasandi) => {
    const katasandiRegex = /^(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return katasandiRegex.test(katasandi);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && gender && email && katasandi) {
      console.log("Form submitted successfully!");
    } else {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="h-screen flex flex-row-reverse items-center justify-center">
      <div className="absolute top-0 left-0 p-8 md:p-8 xl:p-12">
        <Link
          to="/DoctorLogin"
          className="rounded-lg p-4 text-white bg-color-primary-500 hover:bg-color-primary-800 md:bg-color-primary-500 md:hover:bg-color-primary-800 md:text-white"
          type="submit"
        >
          <HiArrowSmLeft />
        </Link>
      </div>
      <div className="h-screen bg-color-primary-400 dark:bg-color-primary-700 w-full hidden lg:flex items-center justify-center">
        <img
          className="w-3/5 -scale-x-100"
          src="./public/img/doctorauth.png"
          alt=""
        />
      </div>
      <div className="dark:bg-gray-900 h-screen w-full px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-primary-500 mb-2 text-center dark:text-white">
            Buat akun sebagai dokter
          </h1>
          <p className="text-sm text-center dark:text-white">
            Silakan isi form di bawah ini.
          </p>
        </div>

        <form
          className="flex flex-col gap-3 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-2 block">
            <Label htmlFor="name1" value="First Name" />
            <TextInput
              id="name1"
              type="text"
              placeholder="Budiyanto"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {formSubmitted && !firstName && (
              <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                Masukkan nama depan Anda.
              </p>
            )}
          </div>

          <div className="mb-2 block">
            <Label htmlFor="name2" value="Last Name" />
            <TextInput
              id="name2"
              type="text"
              placeholder="Siregar"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {formSubmitted && !lastName && (
              <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                Masukkan nama belakang Anda.
              </p>
            )}
          </div>

          <div className="mb-2 block">
            <Label htmlFor="gender" value="Jenis Kelamin" />
            <Select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option disabled hidden value="">
                Pilih Jenis Kelamin
              </option>
              <option value="laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </Select>
            {formSubmitted && !gender && (
              <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                Gender harus di isi.
              </p>
            )}
          </div>

          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              placeholder="nama@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2 block">
            <Label htmlFor="katasandi" value="katasandi" />
            <TextInput
              id="katasandi"
              type="katasandi"
              placeholder="••••••••"
              onChange={handlekatasandiChange}
              value={katasandi}
            />
            {formSubmitted && !katasandi && (
              <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                katasandi harus di isi.
              </p>
            )}
            {!validkatasandi && katasandi && (
              <p className="text-color-warning-700 dark:text-color-warning-200 text-xs mt-1">
                Password harus mengandung 1 huruf kapital, 8 karakter, dan 1
                atau 2 angka
              </p>
            )}
          </div>
          <Button type="submit" color="primary" className="w-full">
            Daftar
          </Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Sudah punya akun?
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              <Link className="ml-1" to="/DoctorLogin">
                Masuk disini
              </Link>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
