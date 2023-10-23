import { IMG_CDN_URL } from "../Config";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="m-4 w-[250px] h-[400px] rounded-xl hover:shadow-2xl border-2 border-gray p-4 hover:rounded-xl bg-white">
      <div>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          className="w-44 h-44 justify-self-center align-self-middle"
        />
        <h3 className="text-xl font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} starts</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
