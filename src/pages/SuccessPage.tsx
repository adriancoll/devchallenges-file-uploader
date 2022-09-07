import { useContext, useEffect, useState } from "react";
import { MainLayout } from "../components/layouts";
import { UIContext } from "../context";

export const SuccessPage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const { currentImage } = useContext(UIContext);

  const copyImageUrl = () => {
    navigator.clipboard.writeText(currentImage);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) return;

    const timer = setTimeout(() => {}, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  return (
    <MainLayout wrapperClassName="items-center">
      <h1 className="text-lg font-medium">
        {isCopied ? "Copied!" : "Uploaded Successfully!"}
      </h1>

      <img
        className="rounded-xl h-60"
        src={currentImage}
        alt="Image name uploaded successfully"
      />

      <div
        className={`${
          isCopied ? "gorder-green-300" : ""
        } bg-drop-zone max-w-full transition-all duration-200 ease-in-out p-1 rounded-lg flex gap-4 relative items-center justify-between border-[1px] border-[#E0E0E0]`}
      >
        <p onClick={copyImageUrl} className=" px-2 truncate select-all">
          {currentImage}
        </p>
        <button
          className="bg-primary text-white text-xs font-medium rounded-lg px-4 py-2"
          onClick={copyImageUrl}
        >
          Copy Link
        </button>
      </div>
    </MainLayout>
  );
};
