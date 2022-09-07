import React from "react";
import { MainLayout } from "../components/layouts";
import { ProgressBar } from "../components/ui";
import { CreateHead } from "../components/utils";

export const LoadingPage = () => {
  return (
    <MainLayout>
      <CreateHead description="test" />
      <p className="text-left">Uploading...</p>
      <ProgressBar />
    </MainLayout>
  );
};
