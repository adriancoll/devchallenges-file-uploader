import { createContext } from "react";

export interface UIContextProps {
  // states
  isDragging: boolean;
  currentImage: string;

  // Methods
  setIsDragging: (payload: boolean) => void;
  setCurrentImage: (payload: string) => void;
}

export const UIContext = createContext({} as UIContextProps);
