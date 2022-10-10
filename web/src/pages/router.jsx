import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import { useLocalStorage } from 'react-use';

// import pages
import { Home } from './home'
import { Login } from './login'
import { Signup } from './Signup'
import { Dashboard } from './dashboard'
import { Profile } from './profile'


// create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
])

export const Router = () => {
  const [auth] = useLocalStorage('auth')
  

  return <RouterProvider router={router} />
}