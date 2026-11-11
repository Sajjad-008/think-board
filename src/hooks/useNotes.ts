import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import * as notesApi from "../api/notes";

export const useNotes = () =>
  useQuery({ queryKey: ["notes"], queryFn: notesApi.getNotes });

export const useNote = (id: string) =>
  useQuery({
    queryKey: ["notes", id],
    queryFn: () => notesApi.getNote(id),
    enabled: !!id,
  });

export const useCreateNote = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: notesApi.createNote,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["notes"] });
      toast.success("یادداشت ساخته شد");
    },
    onError: () => toast.error("خطا در ساخت یادداشت"),
  });
};

export const useUpdateNote = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: notesApi.updateNote,
    onSuccess: (updateNote) => {
      qc.invalidateQueries({ queryKey: ["notes"] });
      qc.invalidateQueries({ queryKey: ["notes", updateNote.id] });
      toast.success("یادداشت بروزرسانی شد");
    },
    onError: () => toast.error("خطا در بروزرسانی یادداشت"),
  });
};

export const useDeleteNote = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: notesApi.deleteNote,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["notes"] });
      toast.success("یادداشت حذف شد");
    },
    onError: () => toast.error("خطا در حذف یادداشت"),
  });
};
