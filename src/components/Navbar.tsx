import { Sun, Moon } from "lucide-react";

function Navbar({
  selected,
  setselectfxn,
  theme,
  onToggleTheme,
}: {
  selected: string;
  setselectfxn: (option: string) => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const links = [
    { name: "about", label: "overview" },
    { name: "projects", label: "projects" },
    { name: "experience", label: "experience" },
  ];
  const writingActive = selected === "journal" || selected === "blogs";
  return (
    <nav className="groove-tb grid grid-cols-[1fr_1fr_1fr_auto] sm:grid-cols-4">
      {links.map(({ name, label }, i) => {
        const active = selected === name;
        return (
          <button
            key={name}
            onClick={() => setselectfxn(name)}
            className={`num min-w-0 px-1 py-2.5 text-[10px] tracking-wide transition-colors sm:text-[11px] ${i > 0 ? "groove-l" : ""} ${active ? "text-zinc-100 bg-white/[0.04]" : "text-zinc-600 hover:text-zinc-300"}`}
          >
            <span className={`${active ? "text-amber-400/90" : "text-zinc-700"} mr-1.5 hidden min-[480px]:inline`}>0{i + 1}</span>{label}
          </button>
        );
      })}
      <div className={`num flex min-w-0 items-center justify-center gap-1 px-2 py-2.5 text-[10px] tracking-wide groove-l sm:gap-2 sm:text-[11px] ${writingActive ? "bg-white/[0.04]" : ""}`}>
        <a
          href="/journal"
          className={`transition-colors ${selected === "journal" ? "text-zinc-100" : "text-zinc-600 hover:text-zinc-300"}`}
        >
          journal
        </a>
        <span className="text-zinc-700">|</span>
        <a
          href="/blogs"
          className={`transition-colors ${selected === "blogs" ? "text-zinc-100" : "text-zinc-600 hover:text-zinc-300"}`}
        >
          blogs
        </a>
        <span className="text-zinc-700">|</span>
        <button
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "switch to light mode" : "switch to dark mode"}
          className="text-zinc-600 transition-colors hover:text-zinc-100"
        >
          {theme === "dark" ? <Sun className="size-[14px]" /> : <Moon className="size-[14px]" />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
