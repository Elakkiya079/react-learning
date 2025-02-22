import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyComp from "./components/BodyComp";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/**
 * Header
 *  -Logo
 *  -Menu Items
 *  -Cart
 * Body
 *  -Search
 *  -Restaurant Container
 *    -Restro Cards
 *      -Res Image
 *      -Name of res, star rating, cuisines, delivery time
 * Footer
 *  -Copyright
 *  -Address
 *  -Links
 *  -Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/*{if path is  / - render <Body />}
      <BodyComp />
      {if path is /about - render <About />}
      <About />
      {if path is /contact - render <Contact />}
      <Contact />*/}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />); //this is the default one
root.render(<RouterProvider router={appRouter} />); //if we use router we have to pass it like this
