const RestaurantCard = ({ image, name, cuisines, rating }) => {
    return (
      <div className="card">
        <div>
          <img src={image} />
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{rating} stars</h4>
        </div>
      </div>
    );
  };
  export default RestaurantCard;