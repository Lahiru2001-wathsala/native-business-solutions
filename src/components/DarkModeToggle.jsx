import { useEffect, useState } from "react";

export default function DarkModeToggle() {

  const [dark, setDark] = useState(false);

  useEffect(() => {

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 transition"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}