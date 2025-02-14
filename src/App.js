import React from 'react';
import ReactDOM from 'react-dom/client';
import Header  from "./components/Header";
import BodyComp from "./components/BodyComp";



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


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
