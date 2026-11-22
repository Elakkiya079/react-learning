import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
		<div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
			<div className="logo-container">
				<img src={LOGO_URL} className="w-56" />
			</div>
			<div className="flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-4">Online Status : {onlineStatus ? "✅" : "🛑"}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">Cart</li>
					<button
						className="loginButton"
						onClick={() => {
							loginButton === "Login" ?
								setLoginButton("Logout")
							:	setLoginButton("Login");
						}}>
						{loginButton}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
