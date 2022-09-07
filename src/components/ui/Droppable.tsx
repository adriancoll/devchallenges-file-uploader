import { DragEvent, useContext, useEffect } from "react";

import mountains from "../../assets/images/image.svg";
import { UIContext } from "../../context";
import { useUploadImage } from "../../hooks/useUploadImage";

export const Droppable = () => {
  const { isDragging, setIsDragging } = useContext(UIContext);

  const { setFile } = useUploadImage();

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const items = event.dataTransfer;
    console.log(items);

    //  if (!files || files.length === 0) return;

    //  setFile(files[0]);
  };

  useEffect(() => {
    window.addEventListener("mouseleave", () => setIsDragging(false));

    return window.removeEventListener("mouseleave", () => setIsDragging(false));
  }, []);

  return (
    <div
      onDragOver={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      style={{ borderWidth: "2px" }}
      className={`${
        isDragging ? "hue-rotate-180" : ""
      } bg-drop-zone select-none px-20 py-10 gap-6 flex flex-col min-w-[338px] justify-evenly items-center rounded-xl border-dashed border-primary-light transition-all ease-in duration-300`}
    >
      <img src={mountains} alt="drag image here" />
      <p className="text-primary-text select-none text-xs">
        Drag & Drop your image here
      </p>
    </div>
  );
};
