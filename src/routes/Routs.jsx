import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import MainLayOut from "../layouts/MainLayOut";

const routes = createBrowserRouter([
    {
      path:'/', 
      element: <MainLayOut></MainLayOut>
    }
])

export default routes; 