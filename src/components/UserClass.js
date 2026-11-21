import React from "react";
class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			//count2:1
			userInfo: {
				login: "Chan",
				location: "Aruppukottai",
				avatar_url: "http://dummy-photo.com",
			},
		};
		console.log(this.props.name + "Child constructor");

	}

     async componentDidMount(){
			const data = await fetch("https://api.github.com/users/Elakkiya079");
			const json = await data.json();
			this.setState({
				userInfo: json,
			});

            //example of set componentDidMount and unmount


            //this.timer = setInterval(()=>{
            //    console.log("set interval called")
            //},1000)

            //end here

			//console.log(this.props.name + "Child component mounted");
		}

    componentDidUpdate(prevProps,prevState){
        if(this.state.count != prevState.count){

        }
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.timer);
    }
	render() {
		console.log(this.props.name + "child render");

		//const { name } = this.props;
        const { login, location, avatar_url } = this.state.userInfo;
		//const { count} = this.state;
		return (
			<div className="user-card">
				{/*<h1>Count = {count}</h1>*/}
				{/*<h1>Count 2 = {count2}</h1>*/}
				{/*<button onClick={()=>{
                    this.setState({
                        count:this.state.count +1 
                    })
                }}>Increase Count</button>
				*/}
                <img src={avatar_url} />
				<h3>Name : {login}</h3>
				<h3>Location : {location ? location : 'Aruppukottai'}</h3>
				<h3>Contact : elakia79@gmail.com</h3>
			</div>
		);
	}
}

export default UserClass;
