import { useEffect, useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !isLight;

    setIsLight(nextTheme);

    document.documentElement.classList.toggle("light", nextTheme);

    localStorage.setItem(
      "theme",
      nextTheme ? "light" : "dark"
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? "☀" : "☾"}
    </button>
  );
}

export default ThemeToggle;