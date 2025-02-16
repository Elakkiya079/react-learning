import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
const Header = () =>{
    const[loginButton,setLoginButton] = useState("Login");
    return (
     <div className='header'>
         <div className='logo-container'>
             <img src={LOGO_URL} className='logo'/>
         </div>
         <div className='list-items'>
             <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
                 <button className='loginButton' onClick={()=>{
                    loginButton ==='Login' ? setLoginButton("Logout") : setLoginButton("Login");
                 }}>{loginButton}</button>
             </ul>
         </div>
     </div>
    );
}

export default Header;