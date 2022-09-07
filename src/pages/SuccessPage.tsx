import { MainLayout } from "../components/layouts";

export const SuccessPage = () => {
  return (
    <MainLayout wrapperClassName="items-center">
      <h1 className="bg-slate-400">Uploaded Successfully!</h1>

      <figure className="rounded-md">
        <img
          className="object-contain h-52 w-96"
          src="https://picsum.photos/1920/1080"
          alt="Image name uploaded successfully"
        />
      </figure>

      <div className="bg-drop-zone rounded-md flex gap-4 items-center justify-between border-2 border-gray-400">
        <p className="w-1/3 text-ellipsis overflow-hidden">
          https://picsum.photos/1920/1080
        </p>
        <button className="bg-primary px-2 py-1">Copy Link</button>
      </div>
    </MainLayout>
  );
};
