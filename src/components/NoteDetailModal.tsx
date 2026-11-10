import { Pencil, Trash2 } from "lucide-react";
import type { Note } from "../types/note";

interface Props {
  note: Note;
  onClose: () => void;
  onEdit: (note: Note) => void;
  onDelete: (note: Note) => void;
}

const formatDate = (date: string) =>
  new Date(date).toLocaleString("fa-IR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

export default function NoteDetailModal({
  note,
  onClose,
  onEdit,
  onDelete,
}: Props) {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="mb-3 break-words text-xl font-bold">{note.title}</h3>
        <p className="whitespace-pre-wrap break-words text-base-content/80 ">
          {note.content}
        </p>

        <div className="mt-4 space-y-1 text-xs text-base-content/50">
          <p>ایجاد: {formatDate(note.createdAt)}</p>
          <p>آخرین ویرایش: {formatDate(note.updatedAt)}</p>
        </div>

        <div className="modal-action flex-wrap">
          <button className="btn" onClick={onClose}>
            بستن
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => onDelete(note)}
          >
            <Trash2 size={16} />
            حذف
          </button>
          <button className=" btn btn-primary" onClick={() => onEdit(note)}>
            <Pencil size={16} />
            ویرایش
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </dialog>
  );
}
