import User from "./User"
import UserClass from "./UserClass";
const About = () =>{
    return (
			<div>
				<h1>About</h1>
				<h2>This is React Learning</h2>
				<User name={"Elakkiya (function)"} />
				<UserClass name={"Elakkiya (class)"} />
			</div>
		);
}

export default About;