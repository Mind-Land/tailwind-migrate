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
import Checknowpage from "./pages/checknow/Checknowpage";
import Articles from "./pages/articles/Articles";
import Doctor from "./pages/doctor/Doctor";
import Detailarticles from "./pages/articles/Detailarticles";
import Faqcomponent from "./components/accordion/Faq";
import User from "./pages/user/user";

const queryClient = new QueryClient();
const pagesWithoutNavbarFooter = ["/login", "/register", "/user", "/user/*"];

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
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/checknow" element={<Checknowpage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/detailarticles" element={<Detailarticles />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/faq" element={<Faqcomponent />} />
            <Route path="/user/*" element={<User />} /> 
          </Routes>
          {shouldShowNavbarFooter && <Footer />}
        </Flowbite>
      </QueryClientProvider>
    </>
  );
}

export default App;
