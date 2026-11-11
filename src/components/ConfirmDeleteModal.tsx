import type { Note } from "../types/note";
import { useDeleteNote } from "../hooks/useNotes";

interface Props {
  note: Note;
  onClose: () => void;
}

export default function ConfirmDeleteModel({ note, onClose }: Props) {
  const { mutate: remove, isPending } = useDeleteNote();

  const handleDelete = () => {
    remove(note.id, { onSuccess: onClose });
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="text-lg font-bold">حذف یادداشت</h3>
        <p className="py-4">
          آیا از حذف «<span className="font-semibold">{note.title}</span>»
          مطمئنی؟ این کار قابل بازگشت نیست.
        </p>
        <div className="modal-action">
          <button className="btn" onClick={onClose} disabled={isPending}>
            انصراف
          </button>
          <button
            className="btn btn-error text-error-content"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
            حذف
          </button>
        </div>
      </div>
      <div
        className="modal-backdrop"
        onClick={isPending ? undefined : onClose}
      />
    </dialog>
  );
}
