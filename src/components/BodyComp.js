import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const BodyComp = () =>{
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.878039&lng=77.021686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json.data.cards[3].card.card.gridElements?.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[3].card.card.gridElements?.infoWithStyle.restaurants);
    }

    //conditional rendering
    //if(listOfRestaurant?.length === 0){
    //    return <Shimmer/>
    //}

    return listOfRestaurant?.length === 0 ? (<Shimmer/>) :(
        <div className='body'>
            <button onClick={()=>{
                const filteredList = listOfRestaurant?.filter((res)=>res.info.avgRating > 4);
                setListOfRestaurant(filteredList);
            }}>Top Rated Restaurant</button>
            <div className='res-container'>
                {
                    listOfRestaurant?.map((restaurant) => <RestaurantCards key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default BodyComp;