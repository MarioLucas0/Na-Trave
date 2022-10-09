import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard.jsx";

import Home from "./pages/Home/Home.jsx";
import { Login}  from "./pages/Login/login";
import { Profile } from "./pages/Profile/profile";
import { Signup }  from "./pages/Signup/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,
  },
  {
    path: "/login",
    element: <Login  />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard /> ,
  },
  {
    path: "/profile",
    element:  <Profile />,
  },
 
]);

export const Rotas =  () => (
  <RouterProvider router={router} />
)