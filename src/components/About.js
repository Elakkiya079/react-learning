import User from "./User";
import UserClass from "./UserClass";
import React from "react";
//const About = () =>{
//    return (
//			<div>
//				<h1>About</h1>
//				<h2>This is React Learning</h2>
//				{/*<User name={"Elakkiya (function)"} />*/}
//				<UserClass name={"Elakkiya (class)"} />
//			</div>
//		);
//}

//export default About;

class About extends React.Component {
	constructor(props) {
		super(props);
		//console.log("Parent constructor");
	}
	componentDidMount() {
		//console.log("Parent component mounted");
	}
	render() {
		//console.log("Parent render");

		return (
			<div>
				{/*<h1>About</h1>
				<h2>This is React Learning</h2>*/}
				{/*<User name={"Elakkiya (function)"} />*/}
				<UserClass name={"Elakkiya (class)"} />
				{/*<UserClass name={"Chander (class)"} />*/}
			</div>
		);
	}
}

export default About;
