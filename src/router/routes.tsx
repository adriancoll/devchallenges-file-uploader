import { HomePage, LoadingPage, SuccessPage } from "../pages";

export const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <HomePage /> },
  {
    path: "/loading",
    key: "LOADING",
    component: () => <LoadingPage />,
  },
  {
    path: "/success",
    key: "SUCCESS",
    component: () => <SuccessPage />,
  },
];

