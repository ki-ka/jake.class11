import { Home } from "../components/pages/Home";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  }
];
