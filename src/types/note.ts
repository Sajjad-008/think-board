export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoteInput {
  title: string;
  content: string;
}

export interface ApiResponse<T> {
  success: boolean;
  response: T;
  status: number;
}
