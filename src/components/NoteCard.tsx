import type { Note } from "../types/note";

interface Props {
  note: Note;
  onClick: (note: Note) => void;
}

export default function NoteCard({ note, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(note)}
      className="card bg-base-100 border border-base-300 text-start shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="card-body">
        <h2 className="card-title line-clamp-1 break-all">{note.title}</h2>
        <p className="line-clamp-3 wrap-break-word text-base-content/70">
          {note.content}
        </p>
        <p className="mt-2 text-xs text-base-content/50">
          {new Date(note.createdAt).toLocaleDateString("fa-IR")}
        </p>
      </div>
    </button>
  );
}
