import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDarkMode ? "Modo claro" : "Modo oscuro"}
    >
      <i className={`fa ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
    </button>
  );
};

export default ThemeToggle;
