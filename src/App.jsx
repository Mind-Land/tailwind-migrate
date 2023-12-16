import { Flowbite } from "flowbite-react";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import customTheme from "./custom-theme";
import Homepage from "./pages/Homepage";
import Navbarcomponent from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import About from "./pages/about/About";
import Checknowpage from "./pages/checknow/Checknowpage";
import Articles from "./pages/articles/Articles";
import Doctor from "./pages/doctor/Doctor";
import Detailarticles from "./pages/articles/Detailarticles";
import Faqcomponent from "./components/Faq";
import ChatAiPage from "./pages/Ai/chatAi";
import DoctorLogin from "./pages/auth/doctorAuth/DoctorLogin";
import DoctorRegister from "./pages/auth/doctorAuth/DoctorRegister";

const queryClient = new QueryClient();
const pagesWithoutNavbarFooter = ["/login", "/register"];

function App() {
  const location = useLocation();
  const shouldShowNavbarFooter = !pagesWithoutNavbarFooter.includes(
    location.pathname
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Flowbite theme={{ theme: customTheme }}>
          {shouldShowNavbarFooter && <Navbarcomponent />}
          <Routes>
            <Route path="/" Component={Homepage}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/logindoctor" Component={DoctorLogin}></Route>
            <Route path="/registerdoctor" Component={DoctorRegister}></Route>
            <Route path="/register" Component={Register}></Route>
            <Route path="/About" Component={About}></Route>
            <Route path="/checknow" Component={Checknowpage}></Route>
            <Route path="/articles" Component={Articles}></Route>
            <Route path="/detailarticles" Component={Detailarticles}></Route>
            <Route path="/doctor" Component={Doctor}></Route>
            <Route path="/faq" Component={Faqcomponent}></Route>
            <Route path="/chatai" Component={ChatAiPage}></Route>
          </Routes>
          {shouldShowNavbarFooter && <Footer />}
        </Flowbite>
      </QueryClientProvider>
    </>
  );
}

export default App;
