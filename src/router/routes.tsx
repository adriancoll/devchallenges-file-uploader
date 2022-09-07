import { HomePage, LoadingPage, SuccessPage } from "../pages";

interface Route {
  path: string;
  key: string;
  exact?: boolean;
  Component: React.ReactNode;
}

export const ROUTES: Route[] = [
  { path: "/", key: "ROOT", exact: true, Component: <HomePage /> },
  {
    path: "/loading",
    key: "LOADING",
    Component: <LoadingPage />,
  },
  {
    path: "/success",
    key: "SUCCESS",
    Component: <SuccessPage />,
  },
];
