import { Flowbite } from "flowbite-react";
import customTheme from "./custom-theme";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Register />
    </Flowbite>
  );
}

export default App;
