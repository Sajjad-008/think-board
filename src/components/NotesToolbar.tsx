import { Search, X } from "lucide-react";

export type SortOption = "newest" | "oldest" | "title";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}

export default function NotesToolbar({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row">
      <label className="flex h-12 w-full items-center gap-3 rounded-lg border border-base-300 bg-base-100 px-4 focus-within:border-primary">
        <Search size={18} className="shrink-0 opacity-50" />
        <input
          type="text"
          className="grow bg-transparent outline-none"
          placeholder="جستجو در عنوان و توضیحات..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {search && (
          <button
            type="button"
            className="shrink-0"
            aria-label="پاک کردن جستجو"
            onClick={() => onSearchChange("")}
          >
            <X size={16} className="opacity-60 hover:opacity-100" />
          </button>
        )}
      </label>

      <select
        className="select select-bordered h-12 w-full px-4 sm:w-52"
        value={sort}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
      >
        <option value="newest">جدیدترین</option>
        <option value="oldest">قدیمی‌ترین</option>
        <option value="title">بر اساس عنوان</option>
      </select>
    </div>
  );
}
