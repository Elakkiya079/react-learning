import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
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

	return listOfRestaurant?.length === 0 ?
			<Shimmer />
		:	<div className="body">
				<div className="filter">
					<div className="search">
						<div className="search-input-container">
							<input
								type="text"
								className="search-box"
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
					<button
						onClick={() => {
							const filteredList = listOfRestaurant?.filter(
								(res) => res.info.avgRating > 4.5,
							);
							setFilteredRestaurants(filteredList);
						}}>
						Top Rated Restaurant
					</button>
				</div>
				<div className="res-container">
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
