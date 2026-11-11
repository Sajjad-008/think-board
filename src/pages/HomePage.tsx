import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import NoteCard from "../components/NoteCard";
import Navbar from "../components/Navbar";
import NoteFormModal from "../components/NoteFormModal";
import NoteDetailModal from "../components/NoteDetailModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import type { Note } from "../types/note";
import NotesToolbar, { type SortOption } from "../components/NotesToolbar";
import NoteSkeleton from "../components/NoteSkeleton";
import EmptyState from "../components/EmptyState";
import { useFilteredNotes } from "../hooks/useFilteredNotes";

type ModalState =
  | { type: "none" }
  | { type: "create" }
  | { type: "view"; note: Note }
  | { type: "edit"; note: Note }
  | { type: "delete"; note: Note };

export default function HomePage() {
  const { data: notes, isLoading, isError, refetch } = useNotes();
  const [modal, setModal] = useState<ModalState>({ type: "none" });

  const closeModal = () => setModal({ type: "none" });

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const visibleNotes = useFilteredNotes(notes, search, sort);

  return (
    <>
      <Navbar onCreate={() => setModal({ type: "create" })} />
      <main className="mx-auto max-w-6xl p-4">
        {isError && (
          <div className="alert alert-error mx-auto my-10 max-w-md">
            <span>خطا در دریافت یادداشت‌ها</span>
            <button className="btn btn-sm" onClick={() => refetch()}>
              تلاش دوباره
            </button>
          </div>
        )}

        {!isError && (
          <NotesToolbar
            search={search}
            onSearchChange={setSearch}
            sort={sort}
            onSortChange={setSort}
          />
        )}

        {isLoading && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <NoteSkeleton key={i} />
            ))}
          </div>
        )}

        {notes && visibleNotes.length === 0 && (
          <EmptyState
            isSearching={search.trim() !== ""}
            onCreate={() => setModal({ type: "create" })}
            onClearSearch={() => setSearch("")}
          />
        )}

        {visibleNotes.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onClick={(n) => setModal({ type: "view", note: n })}
              />
            ))}
          </div>
        )}
      </main>

      {modal.type === "create" && <NoteFormModal onClose={closeModal} />}

      {modal.type === "view" && (
        <NoteDetailModal
          note={modal.note}
          onClose={closeModal}
          onEdit={(note) => setModal({ type: "edit", note })}
          onDelete={(note) => setModal({ type: "delete", note })}
        />
      )}

      {modal.type === "edit" && (
        <NoteFormModal note={modal.note} onClose={closeModal} />
      )}

      {modal.type === "delete" && (
        <ConfirmDeleteModal note={modal.note} onClose={closeModal} />
      )}
    </>
  );
}
