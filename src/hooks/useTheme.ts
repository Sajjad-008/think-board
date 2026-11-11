import { useEffect, useState } from "react";

export type Theme = "honey-light" | "honey-dark";

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  if (saved === "honey-light" || saved === "honey-dark") return saved;
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "honey-dark"
    : "honey-light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "honey-light" ? "honey-dark" : "honey-light"));
  };
  return { theme, toggleTheme };
};
