import { ChangeEvent, useContext } from "react";
import { UIContext } from "../../context";
import { useUploadImage } from "../../hooks/useUploadImage";

export const FileUploaderButton = () => {
  const { isDragging } = useContext(UIContext);

  const { setFile } = useUploadImage();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files || files.length === 0) return

    setFile(files[0])
  }

  return (
    <>
      <input
        id="choose-file"
        type="file"
        hidden
        accept="image/png, image/jpeg, image/gif"
        onChange={handleChange}
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
