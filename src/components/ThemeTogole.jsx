import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Moon, Sun } from "lucide-react"; 

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(AuthContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex justify-center m-2">
      <button
        className="btn  text-white border-none bg-purple-500 hover:bg-purple-600 rounded-md"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
