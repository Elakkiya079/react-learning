import { useEffect, useState } from "react";
const User = (props) => {
	const [count] = useState(0);
	const [count2] = useState(1);
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("set interval called");
		}, 1000);
		return () => {
			clearInterval(timer);
			console.log("cleared");
		};
	}, []);
	return (
		<div className="user-card">
			<h1>Count = {count}</h1>
			<h1>Count 2 = {count2}</h1>
			<h3>Name : {props.name}</h3>
			<h3>Location : Aruppukottai</h3>
			<h3>Contact : elakia79@gmail.com</h3>
		</div>
	);
};

export default User;
