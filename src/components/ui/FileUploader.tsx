import { useContext } from "react";

import { UIContext } from "../../context";

import { Droppable } from "./Droppable";
import { FileUploaderButton } from "./FileUploaderButton";

export const FileUploader = () => {
  const { isDragging, isUploading } =
    useContext(UIContext);

  return (
    <div
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        lineHeight: "27px",
        color: "#4F4F4F",
      }}
      className=" text-center px-8 py-9 bg-white flex flex-col rounded-xl items-center justify-between gap-6"
    >
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
    </div>
  );
};
