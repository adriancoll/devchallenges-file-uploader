import React from "react";
import { MainLayout } from "../components/layouts";
import { CreateHead } from "../components/utils";

export const LoadingPage = () => {
  return <MainLayout><CreateHead description="test" />Loading</MainLayout>;
};
