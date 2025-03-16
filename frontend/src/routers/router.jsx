import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Search from "../pages/search/search";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/categories/:category",
        element: <Category />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
export default router;
