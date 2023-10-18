import { IMG_CDN_URL } from "../Config";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "white",
      }}
    >
      <div>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} starts</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
