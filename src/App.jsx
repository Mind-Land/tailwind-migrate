import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import customTheme from './custom-theme';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Homepage/>
      <DarkThemeToggle></DarkThemeToggle>
    </Flowbite>
  );
}

export default App