const currentTheme = () => {
  const theme = localStorage.getItem("flowbite-theme-mode");

  return theme;
};

export default currentTheme;
