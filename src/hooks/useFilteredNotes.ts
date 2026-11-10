import { useMemo } from "react";
import type { Note } from "../types/note";
import type { SortOption } from "../components/NotesToolbar";

export const useFilteredNotes = (
  notes: Note[] | undefined,
  search: string,
  sort: SortOption,
): Note[] =>
  useMemo(() => {
    if (!notes) return [];

    const query = search.trim().toLowerCase();

    const filtered = query
      ? notes.filter(
          (n) =>
            n.title.toLowerCase().includes(query) ||
            n.content.toLowerCase().includes(query),
        )
      : notes;

    return [...filtered].sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      const diff =
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return sort === "neweset" ? -diff : diff;
    });
  }, [notes, search, sort]);
