"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-11 w-[76px] rounded-full border border-line bg-panel"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-switch"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Sun size={14} strokeWidth={1.7} className="theme-switch__sun" />
      <Moon size={14} strokeWidth={1.7} className="theme-switch__moon" />

      <span
        className={`theme-switch__thumb ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={14} strokeWidth={1.8} />
        ) : (
          <Sun size={14} strokeWidth={1.8} />
        )}
      </span>
    </button>
  );
}
