import { createContext } from 'react';
import { CursorContextType } from './types';

export const defaultContextValue: CursorContextType = {
  cursorType: 'default',
  cursorText: '',
  setCursorType: () => {},
  setCursorText: () => {},
};

export const CursorContext = createContext<CursorContextType>(defaultContextValue);