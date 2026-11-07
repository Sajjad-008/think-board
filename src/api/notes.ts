import { api } from "./axios";
import type { ApiResponse, Note, NoteInput } from "../types/note";
import { data } from "react-router-dom";

export const getNotes = async (): Promise<Note[]> => {
  const { data } = await api.get<ApiResponse<Note[]>>("/notes");
  return data.response;
};

export const getNote = async (id: string): Promise<Note> => {
  const { data } = await api.get<ApiResponse<Note>>(`/notes/${id}`);
  return data.response;
};

export const createNote = async (input: NoteInput): Promise<Note> => {
  const { data } = await api.post<ApiResponse<Note>>("/notes", input);
  return data.response;
};

export const updateNote = async ({
  id,
  input,
}: {
  id: string;
  input: NoteInput;
}): Promise<Note> => {
  const { data } = await api.put<ApiResponse<Note>>(`/notes/${id}`, input);
  return data.response;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};
