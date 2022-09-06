import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { LoadingPage } from "../pages/LoadingPage";
import { SuccessPage } from "../pages/SuccessPage";
import { ROUTES } from "./routes";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {
          ROUTES.map(route => )
        }
        <Route path="loading" element={<LoadingPage />} />
        <Route path="success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
};
