import { Plus, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

interface Props {
  onCreate: () => void;
}

export default function Navbar({ onCreate }: Props) {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="navbar bg-base-100 border-b border-base-300 px-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">یادداشت‌ها</h1>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-ghost btn-sm btn-circle"
            onClick={toggleTheme}
            aria-label="تغییر تم"
          >
            {theme === "honey-light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="btn btn-primary btn-sm"
            aria-label="یادداشت جدید"
            onClick={onCreate}
          >
            <Plus size={18} />
            <span className="hidden sm:inline">یادداشت جدید</span>
          </button>
        </div>
      </div>
    </header>
  );
}
