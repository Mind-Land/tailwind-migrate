import { useState } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import logindoctor from "/img/hero/logindoctor.png";

const Doctorregister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = (event) => {
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
    } else {
      setFormSubmitted(true); // Set form as submitted to display validation messages
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 bg-color-primary-400 dark:bg-color-primary-700">
        <img className="w-3/5 -scale-x-100" src={logindoctor} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-5 py-8 bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center mb-6 mt-10">
          {/* Title and description */}
          <h1 className="text-2xl font-bold text-primary-500 mb-2 text-center dark:text-white">
            Buat akun sebagai dokter
          </h1>
          
        </div>

        <form
          className="flex flex-col gap-2 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between gap-4">
            <div className="mb-2 block w-full">
              <Label htmlFor="name1" value="First Name" />
              <TextInput
                id="name1"
                type="text"
                placeholder="Nama Depan"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {formSubmitted && !firstName && (
                <p className="text-red-500 text-xs mt-1">
                  First Name is required.
                </p>
              )}
            </div>

            <div className="mb-2 block w-full">
              <Label htmlFor="name2" value="Last Name" />
              <TextInput
                id="name2"
                type="text"
                placeholder="Nama Belakang"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {formSubmitted && !lastName && (
                <p className="text-red-500 text-xs mt-1">
                  Last Name is required.
                </p>
              )}
            </div>
          </div>

          <div className="mb-2 block">
            <Label htmlFor="gender" value="Jenis Kelamin" />
            <Select
              id="gender"
              required
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
              <p className="text-red-500 text-xs mt-1">Gender is required.</p>
            )}
          </div>

          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
            <TextInput
              id="email1"
              type="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formSubmitted && !email && (
              <p className="text-red-500 text-xs mt-1">Email is required.</p>
            )}
          </div>

          <div className="mb-2 block">
            <Label htmlFor="password2" value="Password" />
            <TextInput
              id="password2"
              type="password"
              required
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
            {formSubmitted && !password && (
              <p className="text-red-500 text-xs mt-1">Password is required.</p>
            )}
            {!validPassword && password && (
              <p className="text-red-500 text-xs mt-1">
                Password must contain 1 uppercase letter, 8 characters, and 1 or
                2 digits.
              </p>
            )}
          </div>

          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat Password" />
            <TextInput
              id="repeat-password"
              type="password"
              placeholder="Confirm password"
              required
              onChange={handleRepeatPasswordChange}
              value={repeatPassword}
            />
            {formSubmitted && !repeatPassword && (
              <p className="text-red-500 text-xs mt-1">
                Repeat Password is required.
              </p>
            )}
            {!passwordsMatch && repeatPassword && (
              <p className="text-red-500 text-xs mt-1">
                Passwords do not match.
              </p>
            )}
          </div>

          <Button type="submit" color="primary" className="w-full">
            Submit
          </Button>

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            <Link
              to="/logindoctor"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              masuk dengan akun dokter
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Doctorregister;
