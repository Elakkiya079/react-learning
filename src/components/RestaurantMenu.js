import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { redirect, useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  console.log('resinfodata---->',resInfo)
  //useEffect(() => {
  //  if (resId) fetchMenu();
  //}, []);
  //const fetchMenu = async () => {
  //  //const data = await fetch(
  //  //  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.878039&lng=77.021686&restaurantId=229"
  //  //);
  //  const data = await fetch(MENU_API + resId);
  //  console.log(data);
  //  const json = await data.json();
  //  setResInfo(json?.data || {});
  //};
  if (resInfo == null) return <Shimmer />;
  const { name, cuisines = [], costForTwoMessage } =
    resInfo?.cards?.map((card) => card?.card?.card?.info).find((info) => info?.name) ||
    {};
  const regularCards =
    resInfo?.cards?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];
  const itemCards = regularCards.flatMap((category) => {
    const card = category?.card?.card;
    if (card?.itemCards) return card.itemCards;
    return (card?.categories || []).flatMap(
      (nested) => nested?.itemCards || [],
    );
  });
  //const { itemCardsRecommended } =
  //  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>
        {cuisines.join(", ")}- {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => {
          const info = item?.card?.info || {};
          const price = info.price || info.defaultPrice || 0;
          return (
            <li key={`${info.id}-${index}`}>
              {info.name} - Rs.{price / 100}
            </li>
          );
        })}
      </ul>
      {/*<ul>
        {itemCardsRecommended.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>*/}
    </div>
  );
  //return <h1>Haiii</h1>;
};

export default RestaurantMenu;
