import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layouts";
import { ProgressBar } from "../components/ui";
import { CreateHead } from "../components/utils";
import { UIContext } from "../context";

export const LoadingPage = () => (
  <MainLayout>
    <CreateHead description="test" />
    <p className="text-left">Uploading...</p>
    <ProgressBar />
  </MainLayout>
);
