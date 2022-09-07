import { useContext } from "react";
import { UIContext } from "../../context";

export const FileUploaderButton = () => {
  const { isDragging } = useContext(UIContext);

  return (
    <>
      <input
        id="choose-file"
        type="file"
        hidden
        accept="image/png, image/jpeg, image/gif"
      />
      <label
        htmlFor="choose-file"
        aria-disabled={isDragging}
        className="rounded-lg text-center px-4 py-2 bg-primary disabled:opacity-50 text-white cursor-pointer active:shadow-xl hover:shadow-lg transition-shadow duration-500"
      >
        Choose a file
      </label>
    </>
  );
};
