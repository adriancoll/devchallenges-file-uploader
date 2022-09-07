import { useContext, useState } from "react";
import { MainLayout } from "../components/layouts";
import { UIContext } from "../context";

export const SuccessPage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const { currentImage } = useContext(UIContext);

  const copyImageUrl = () => {
    
    navigator.clipboard.writeText(currentImage)
    setIsCopied(true);
  };

  return (
    <MainLayout wrapperClassName="items-center">
      <h1 className="bg-slate-400">Uploaded Successfully!</h1>

      <img
        className="rounded-md h-52 w-96"
        src={currentImage}
        alt="Image name uploaded successfully"
      />

      <div className="bg-drop-zone rounded-md flex gap-4 items-center justify-between border-2 border-gray-400">
        <p className="w-1/3 truncate select-all">{currentImage}</p>
        <button className="bg-primary px-2 py-1" onClick={copyImageUrl}>
          Copy Link
        </button>
      </div>
    </MainLayout>
  );
};
