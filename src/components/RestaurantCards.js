import { CDN_URL } from "../utils/constants";
const RestaurantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="res-cuisines">
        Cuisine:{cuisines[0]},{cuisines[1]}
      </h4>
      <h4 className="res-ratings">{avgRating} Stars</h4>
      <h4 className="res-delivery">Delivery time : {sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCards;
