import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Search from "../pages/search/search";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/Shop/productDetails/SingleProduct";
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
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);
export default router;
