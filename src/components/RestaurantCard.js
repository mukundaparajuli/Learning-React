const RestaurantCard = ({ cloudinaryImageId, name, cuisines }) => {
  return (
    <div className="card">
      <div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            {cloudinaryImageId }
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
