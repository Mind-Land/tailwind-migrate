import { Flowbite } from "flowbite-react";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import customTheme from "./custom-theme";
import Homepage from "./pages/Homepage";
import Navbarcomponent from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import About from "./pages/about/About";
import Articles from "./pages/articles/Articles";
import Doctor from "./pages/doctor/Doctor";
import Detailarticles from "./pages/articles/Detailarticles";
import User from "./pages/user/User";
import Chat from "./pages/Ai/Chat";
import ResetPassword from "./pages/auth/Reset";
import DoctorLogin from "./pages/auth/doctor/DoctorLogin";
import DoctorRegister from "./pages/auth/doctor/DoctorRegister";
import CheckDepression from "./pages/mentaltest/CheckDepression";
import CheckAnxiety from "./pages/mentaltest/CheckAnxiety";

const queryClient = new QueryClient();
const pagesWithoutNavbarFooter = [
  "/login",
  "/login",
  "/reset",
  "/register",
  "/doctorlogin",
  "/doctorregister",
  "/user",
  "/user/*",
];

function App() {
  const location = useLocation();
  const shouldShowNavbarFooter = !pagesWithoutNavbarFooter.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Flowbite theme={{ theme: customTheme }}>
          {shouldShowNavbarFooter && <Navbarcomponent />}
          <Routes>
            <Route path="/" Component={Homepage}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/register" Component={Register}></Route>
            <Route path="/doctorlogin" Component={DoctorLogin}></Route>
            <Route path="/doctorregister" Component={DoctorRegister}></Route>
            <Route path="/reset" Component={ResetPassword}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/checkdepression" Component={CheckDepression}></Route>
            <Route path="/checkanxiety" Component={CheckAnxiety}></Route>
            <Route path="/articles" Component={Articles}></Route>
            <Route path="/detailarticles" Component={Detailarticles}></Route>
            <Route path="/doctor" Component={Doctor}></Route>
            <Route path="/chatai" Component={Chat}></Route>
            <Route path="/user/*" element={<User />} />
          </Routes>
          {shouldShowNavbarFooter && <Footer />}
        </Flowbite>
      </QueryClientProvider>
    </>
  );
}

export default App;
