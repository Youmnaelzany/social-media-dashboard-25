"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  // keep the switch synced with the current theme
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center gap-2">
      <Switch checked={isDark} onCheckedChange={handleToggle} />
    </div>
  );
}
