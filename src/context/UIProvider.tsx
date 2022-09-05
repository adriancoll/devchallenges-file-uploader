import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export interface UIState {
  isUploading: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isUploading: false,
  isDragging: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setIsUploading = (payload: boolean) =>
    dispatch({ type: "[UI] - set is uploading", payload });

  const setIsDragging = (payload: boolean) =>
    dispatch({ type: "[UI] - set is dragging", payload });

  return (
    <UIContext.Provider value={{ ...state, setIsUploading, setIsDragging }}>
      {children}
    </UIContext.Provider>
  );
};
