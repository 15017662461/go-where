import { useRoutes } from "react-router-dom";

import Index from "../page/index/index";
import Seach from "../page/search/index";

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/search",
    element: <Seach />,
  },
];

export const RouterRenderce = () => {
  const element = useRoutes(routes);
  return element;
};
