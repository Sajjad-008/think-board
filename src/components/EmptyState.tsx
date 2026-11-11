import { NotebookPen, SearchX } from "lucide-react";

interface Props {
  isSearching: boolean;
  onCreate: () => void;
  onClearSearch: () => void;
}

export default function EmptyState({
  isSearching,
  onCreate,
  onClearSearch,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-3 py-20 text-center">
      {isSearching ? (
        <>
          <SearchX size={48} className="opacity-40" />
          <p className="text lg font-semibold">نتیجه‌ای پیدا نشد</p>
          <p className="text-sm opacity-60">عبارت دیگری را امتحان کنید.</p>
          <button className="btn btn-outline btn-sm " onClick={onClearSearch}>
            پاک کردن جستجو
          </button>
        </>
      ) : (
        <>
          <NotebookPen size={48} className="opacity-40" />
          <p className="text-lg font-semibold">هنوز یادداشتی ندارید</p>
          <p className="text-sm opacity-60">اولین یادداشت خود را بسازید.</p>
          <button className="btn btn-primary btn-sm" onClick={onCreate}>
            ساخت اولین یادداشت
          </button>
        </>
      )}
    </div>
  );
}
