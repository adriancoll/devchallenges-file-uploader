import { createContext } from "react";

export interface UIContextProps {
  // states
  isUploading: boolean;
  isDragging: boolean;

  // Methods
  setIsUploading: (payload: boolean) => void;
  setIsDragging: (payload: boolean) => void;
}

export const UIContext = createContext({} as UIContextProps);
