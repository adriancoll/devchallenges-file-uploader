import { MainLayout } from "../components/layouts";
import { FileUploader } from "../components/ui";

export const HomePage = () => {
  return (
    <MainLayout wrapperClassName="items-center">
      <FileUploader />
    </MainLayout>
  );
};
