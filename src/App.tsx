// import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Landing from './pages/Landing';
import Category from './pages/Category';
import DesignYourCake from "./pages/DesignYourCake";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SelectYourCake from "./pages/SelectYourCake";
import Password from "./pages/Password";
import NewPassword from "./pages/NewPassword";
import ResetPassword from "./pages/ResetPassword";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Order from "./pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Landing/>
    ),
  },

  {
    path: "/category",
    element: (
      <Category/>
    ),
  },

  {
    path: "/design",
    element: (
      <DesignYourCake/>
    ),
  },

  {
    path: "/reviews",
    element: (
      <Reviews/>
    ),
  },

  {
    path: "/login",
    element: (
      <Login/>
    ),
  },

  {
    path: "/signup",
    element: (
      <SignUp/>
    ),
  },

  {
    path: "/select",
    element: (
      <SelectYourCake/>
    ),
  },

  {
    path: "/password",
    element: <Password/>,
  },
  
  {
    path: "/newpassword",
    element: <NewPassword/>,
  },

  {
    path: "/resetpassword",
    element: <ResetPassword/>,
  },

  {
    path: "/product",
    element: <Product/>,
  },

  {
    path: "/account",
    element: <Account/>,
  },

  {
    path: "/order",
    element: <Order/>,
  },


]);

export const App = () => <RouterProvider router={router}/>
