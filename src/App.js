import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/ProfileClass";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contacts from "./components/Contacts";
// import Instamart from "./components/Instamart";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmerr";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// chunking
// dynamic import
// lazy loading
// code splitting
// on demand loading
// dynamic bundling
const Instamart = lazy(() => import("./components/Instamart"));
// upon on demand loading----->upon render----->suspend loading
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "/about/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body user={{ name: "Mukunda", id: 34343 }} />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
