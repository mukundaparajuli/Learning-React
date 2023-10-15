import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/ProfileClass";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contacts from "./components/Contacts";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/* {outlet} */}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
