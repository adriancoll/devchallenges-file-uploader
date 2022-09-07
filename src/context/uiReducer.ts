import { UIState } from ".";

type UIActionType =
  | { type: "[UI] - set is dragging"; payload: boolean }
  | { type: "[UI] - set current image"; payload: string };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI] - set is dragging":
      return { ...state, isDragging: action.payload };
    case "[UI] - set current image":
      return { ...state, currentImage: action.payload };
    default:
      return state;
  }
};
