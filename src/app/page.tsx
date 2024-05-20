"use client";

import { useTheme } from "@/stores";

export default function Home() {
  const { isDark, setIsDark } = useTheme();

  return (
    <main className="">
      <div className="text-accent font-black text-6xl">
        Rony Moura
      </div>

      <button onClick={() => setIsDark(!isDark)}>
        Change theme
      </button>
    </main>
  );
}
