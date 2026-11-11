import React, { useState } from "react";
import type { Note, NoteInput } from "../types/note";
import { useCreateNote, useUpdateNote } from "../hooks/useNotes";

interface Props {
  note?: Note;
  onClose: () => void;
}

export default function NoteFormModal({ note, onClose }: Props) {
  const isEdit = !!note;

  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");
  const [errors, setErrors] = useState<Partial<NoteInput>>({});

  const { mutate: create, isPending: isCreating } = useCreateNote();
  const { mutate: update, isPending: isUpdating } = useUpdateNote();
  const isPending = isCreating || isUpdating;

  const validate = (): boolean => {
    const newErrors: Partial<NoteInput> = {};
    if (!title.trim()) newErrors.title = "عنوان الزامی است";
    if (!content.trim()) newErrors.content = "توضیحات الزامی است";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const input: NoteInput = { title: title.trim(), content: content.trim() };

    if (isEdit) {
      update({ id: note.id, input }, { onSuccess: onClose });
    } else {
      create(input, { onSuccess: onClose });
    }
  };
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="mb-4 text-lg font-bold">
          {isEdit ? "ویرایش یادداشت" : "یادداشت جدید"}
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm">عنوان</span>
            <input
              type="text"
              className={`input w-full border border-base-content/30 bg-base-200 ${
                errors.title ? "input-error" : ""
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isPending}
            />
            {errors.title && (
              <span className="text-xs text-error">{errors.title}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm">توضیحات</span>
            <textarea
              className={`textarea h-32 min-h-32 w-full resize-none border border-base-content/30 bg-base-200 ${
                errors.content ? "textarea-error" : ""
              }`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPending}
            />
            {errors.content && (
              <span className="text-xs text-error">{errors.content}</span>
            )}
          </label>
          <div className="modal-action mt-0">
            <button
              type="button"
              className="btn"
              onClick={onClose}
              disabled={isPending}
            >
              انصراف
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              {isPending && (
                <span className="loading loading-spinner loading-sm" />
              )}
              {isEdit ? "ذخیره تغییرات" : "ایجاد"}
            </button>
          </div>
        </form>
      </div>
      <div className="model-backdrop" onClick={onClose} />
    </dialog>
  );
}
