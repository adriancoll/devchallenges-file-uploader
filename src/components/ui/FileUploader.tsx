import { useContext } from "react";

import { UIContext } from "../../context";

import { Droppable } from "./Droppable";
import { FileUploaderButton } from "./FileUploaderButton";

export const FileUploader = () => {
  const { isDragging, isUploading } = useContext(UIContext);

  return (
    <>
      <h1 className="text-normal tracking-normal ">Upload your image</h1>
      <p
        style={{ letterSpacing: "-0.035em" }}
        className="text-gray-500 text-xs"
      >
        File should be JPEG, PNG...
      </p>
      <Droppable />
      <p className="text-sm text-primary-text">Or</p>
      <FileUploaderButton />
    </>
  );
};
