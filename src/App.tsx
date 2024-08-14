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
import Cart from "./pages/Cart";
import WriteOnCake from "./pages/WriteOnCake";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing key="landing" />,
  },
  {
    path: "/category",
    element: <Category key="category" />,
  },
  {
    path: "/design",
    element: <DesignYourCake key="design" />,
  },
  {
    path: "/reviews",
    element: <Reviews key="reviews" />,
  },
  {
    path: "/login",
    element: <Login key="login" />,
  },
  {
    path: "/signup",
    element: <SignUp key="signup" />,
  },
  {
    path: "/select",
    element: <SelectYourCake key="select" />,
  },
  {
    path: "/password",
    element: <Password key="password" />,
  },
  {
    path: "/newpassword",
    element: <NewPassword key="newpassword" />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword key="resetpassword" />,
  },
  {
    path: "/product",
    element: <Product key="product" />,
  },
  {
    path: "/account",
    element: <Account key="account" />,
  },
  {
    path: "/order",
    element: <Order key="order" />,
  },
  {
    path: "/cart",
    element: <Cart key="cart" />,
  },
  {
    path: "/write",
    element: <WriteOnCake key="write" />,
  },
]);


export const App = () => <RouterProvider router={router}/>
