import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";
import { cloudinaryUploadImage } from "../utils";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export interface UIState {
  isUploading: boolean;
  isDragging: boolean;
  currentImage: string;
}

const UI_INITIAL_STATE: UIState = {
  isUploading: false,
  isDragging: false,
  currentImage: "",
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setIsDragging = (payload: boolean) =>
    dispatch({ type: "[UI] - set is dragging", payload });

  const setCurrentImage = (payload: string) =>
    dispatch({ type: "[UI] - set current image", payload });

  return (
    <UIContext.Provider value={{ ...state, setIsDragging, setCurrentImage }}>
      {children}
    </UIContext.Provider>
  );
};
