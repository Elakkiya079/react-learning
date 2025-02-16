import React from 'react';
import ReactDOM from 'react-dom/client';
import Header  from "./components/Header";
import BodyComp from "./components/BodyComp";

import {createBrowserRouter,RouterProvider} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

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

const AppLayout = () =>{
    return (
    <div className='app'>
        <Header />
        <BodyComp />
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement:<Error />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/contact',
        element:<Contact />
    }
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)