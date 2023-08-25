"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "../Button";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const themeToChange = theme === "light" ? "dark" : "light";

    setTheme(themeToChange);
  }

  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
