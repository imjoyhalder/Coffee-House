import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Components/CoffeeCards";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('categories.json'),
        children: [
          {
            path: '/category',
            element: <CoffeeCards></CoffeeCards>, 
          },
        ],
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
    ]
  }
])

export default routes; 