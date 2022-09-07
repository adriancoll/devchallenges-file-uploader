import { FC, useEffect, useReducer } from "react";
import { UIContext, uiReducer } from "./";
import { cloudinaryUploadImage } from "../utils";
import Cookies from "js-cookie";

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

  const setCurrentImage = (payload: string) => {
    Cookies.set("currentImage", payload);
    dispatch({ type: "[UI] - set current image", payload });
  };

  useEffect(() => {
    const payload = Cookies.get("currentImage");

    if (!payload) return;

    dispatch({ type: "[UI] - set current image", payload });
  }, []);

  return (
    <UIContext.Provider value={{ ...state, setIsDragging, setCurrentImage }}>
      {children}
    </UIContext.Provider>
  );
};
