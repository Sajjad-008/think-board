import { Plus } from "lucide-react";

interface Props {
  onCreate: () => void;
}

export default function Navbar({ onCreate }: Props) {
  return (
    <header className="navbar bg-base-100 border-b border-base-300 px-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">یادداشت‌ها</h1>
        <button className="btn btn-primary btn-sm" onClick={onCreate}>
          <Plus size={18} />
          یادداشت جدید
        </button>
      </div>
    </header>
  );
}
