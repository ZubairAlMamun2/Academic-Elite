import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ThemeToggle = () => {
    const{theme,setTheme}=useContext(AuthContext)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Persist theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-center m-2">
        <button
      className="btn  btn-primary"
      onClick={toggleTheme}
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
    </div>
  );
};

export default ThemeToggle;
