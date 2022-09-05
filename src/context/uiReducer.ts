import { UIState } from ".";

type UIActionType =
  | { type: "[UI] - set is uploading"; payload: boolean }
  | { type: "[UI] - set is dragging"; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI] - set is uploading":
      return { ...state, isUploading: action.payload };
    case "[UI] - set is dragging":
      return { ...state, isDragging: action.payload };
    default:
      return state;
  }
};
