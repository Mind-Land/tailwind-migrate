import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import customTheme from './custom-theme';
import Aichatpage from './pages/chatAi/aichatpages';

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Aichatpage/>
      <DarkThemeToggle></DarkThemeToggle>
    </Flowbite>
  );
}

export default App