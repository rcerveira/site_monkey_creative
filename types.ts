export type CursorType = 'default' | 'text' | 'banana' | 'button' | 'external';

export interface CursorContextType {
  cursorType: CursorType;
  cursorText: string;
  setCursorType: (type: CursorType) => void;
  setCursorText: (text: string) => void;
}

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  hasHoverState?: boolean;
  description?: string;
  url?: string;
  technologies?: string[];
}