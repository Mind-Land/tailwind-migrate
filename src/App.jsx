import { Flowbite } from "flowbite-react";

import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import customTheme from "./custom-theme";
import Homepage from "./pages/Homepage";
import Navbarcomponent from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Flowbite theme={{ theme: customTheme }}>
          <Navbarcomponent />
          <Routes>
            <Route path="/" Component={Homepage}></Route>
          </Routes>
          <Footer />
        </Flowbite>
      </QueryClientProvider>
    </>
  );
}

export default App;
