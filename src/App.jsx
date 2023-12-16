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
import User from "./pages/user/user";
import Chat from "./pages/ai/Chat";
import ResetPassword from "./pages/auth/Reset";
import CheckStress from "./pages/CheckStress/CheckStress";
import Doctorlogin from "./pages/auth/doctor-auth/Doctorlogin";
import Doctorregister from "./pages/auth/doctor-auth/Doctorregister";


const queryClient = new QueryClient();
const pagesWithoutNavbarFooter = ["/login", "/login","/reset", "/register", "/user", "/user/*"];

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
            <Route path="/reset" Component={ResetPassword}></Route>
            <Route path="/logindoctor" Component={Doctorlogin}></Route>
            <Route path="/registerdoctor" Component={Doctorregister}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/articles" Component={Articles}></Route>
            <Route path="/detailarticles" Component={Detailarticles}></Route>
            <Route path="/doctor" Component={Doctor}></Route>
            <Route path="/chatai" Component={Chat}></Route>
            <Route path="/user/*" element={<User />} />
            <Route path="/checkstress" Component={CheckStress}></Route>
          </Routes>
          {shouldShowNavbarFooter && <Footer />}
        </Flowbite>
      </QueryClientProvider>
    </>
  );
}

export default App;
