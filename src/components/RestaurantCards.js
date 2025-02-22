import { CDN_URL } from "../utils/constants";
const RestaurantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-cards">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">
        Cuisine:{cuisines[0]},{cuisines[1]}
      </h4>
      <h4 className="res-ratings">{avgRating} Stars</h4>
      <h4 className="res-delivery">Delivery time : {sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCards;
