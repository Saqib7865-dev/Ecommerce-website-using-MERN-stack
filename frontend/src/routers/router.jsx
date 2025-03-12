import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <h1>Contact Page</h1> },
      { path: "/about", element: <h1>About page</h1> },
    ],
  },
]);
export default router;
