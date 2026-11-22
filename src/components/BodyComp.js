import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const BodyComp = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		fetchData();
	}, []);
	console.log("value cleared");
	const fetchData = async () => {
		const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
		console.log("data", data);
		const json = await data.json();
		console.log(json);
		console.log(
			json.data.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants,
		);
		setListOfRestaurant(
			json.data.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants,
		);
		setFilteredRestaurants(
			json.data.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants,
		);
	};

	//conditional rendering
	//if(listOfRestaurant?.length === 0){
	//    return <Shimmer/>
	//}

	const onlineStatus = useOnlineStatus();

	if(onlineStatus === false) return <h1>Looks like you are offine ! check internet!</h1>
	return listOfRestaurant?.length === 0 ?
			<Shimmer />
		:	<div className="body">
				<div className="filter flex">
					<div className="search m-4 p-4">
						<div className="search-input-container">
							<input
								type="text"
								className="search-box border border-solid border-black"
								value={searchText}
								onChange={(e) => {
									setSearchText(e.target.value);
								}}
							/>
							{searchText && (
								<button
									className="clear-btn"
									onClick={() => {
										setSearchText("");
										setFilteredRestaurants(listOfRestaurant);
									}}>
									X
								</button>
							)}
							<button
								className="px-4 py-2 bg-green-100 m-4 rounded-lg"
								onClick={() => {
									const filteredRestaurant = listOfRestaurant.filter((res) =>
										res.info.name
											.toLowerCase()
											.includes(searchText.toLowerCase()),
									);
									setFilteredRestaurants(filteredRestaurant);
								}}>
								Search
							</button>
						</div>
					</div>
					<div className="search m-4 p-4 flex items-center ">
						<button
							className="px-4 py-2 bg-gray-100 rounded-lg"
							onClick={() => {
								const filteredList = listOfRestaurant?.filter(
									(res) => res.info.avgRating > 4.5,
								);
								setFilteredRestaurants(filteredList);
							}}>
							Top Rated Restaurant
						</button>
					</div>
				</div>
				<div className="res-container flex flex-wrap">
					{filteredRestaurants.length == 0 ?
						<h1>No Restaurants found..</h1>
					:	filteredRestaurants?.map((restaurant) => (
							<Link
								to={"/restaurant/" + restaurant.info.id}
								key={restaurant.info.id}>
								<RestaurantCards resData={restaurant} />
							</Link>
						))
					}
				</div>
			</div>;
};

export default BodyComp;
