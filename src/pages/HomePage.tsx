import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import NoteCard from "../components/NoteCard";
import Navbar from "../components/Navbar";
import type { Note } from "../types/note";

type ModalState =
  | { type: "none" }
  | { type: "create" }
  | { type: "view"; note: Note }
  | { type: "edit"; note: Note };

export default function HomePage() {
  const { data: notes, isLoading, isError, refetch } = useNotes();
  const [modal, setModal] = useState<ModalState>({ type: "none" });

  return (
    <>
      <Navbar onCreate={() => setModal({ type: "create" })} />
      <main className="mx-auto max-w-6xl p-4">
        {isLoading && (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary" />
          </div>
        )}

        {isError && (
          <div className="alert alert-error mx-auto my-10 max-w-md">
            <span>خطا در دریافت یادداشت‌ها</span>
            <button className="btn btn-sm" onClick={() => refetch()}>
              تلاش دوباره
            </button>
          </div>
        )}

        {notes && notes.length === 0 && (
          <p className="py-20 text-center">هنوز یادداشتی وجود ندارد.</p>
        )}

        {notes && notes.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onClick={(n) => setModal({ type: "view", note: n })}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
