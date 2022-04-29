import { useEffect, useState } from "react";

const useDarkMode = () => {
  console.log(localStorage.theme);
  const [isDarkMode, setDarkMode] = useState(
    () => localStorage.theme === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isDarkMode ? "light" : "dark";
    const next = isDarkMode ? "dark" : "light";

    html.classList.remove(prev);
    html.classList.add(next);

    localStorage.setItem("theme", next);
  }, [isDarkMode]);
  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
