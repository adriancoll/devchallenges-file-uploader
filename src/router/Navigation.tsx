import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { LoadingPage } from "../pages/LoadingPage";
import { SuccessPage } from "../pages/SuccessPage";
import { ROUTES } from "./routes";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {ROUTES.map(({ path, component, key }) => (
          <Route
            path={path}
            key={key}
            element={(props) => <component {...props} />}
          />
        ))}

        <Route path="success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
};
