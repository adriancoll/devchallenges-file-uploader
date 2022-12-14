import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

export const Navigation = () => (
  <Routes>
    {ROUTES.map(({ path, Component, key }) => (
      <Route path={path} key={key} element={Component} />
    ))}
  </Routes>
);
