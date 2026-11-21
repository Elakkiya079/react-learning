import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
		<div className="header">
			<div className="logo-container">
				<img src={LOGO_URL} className="logo" />
			</div>
			<div className="list-items">
				<ul>
					<li>Online Status : {onlineStatus ? "✅" : "🛑"}</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li>Cart</li>
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
