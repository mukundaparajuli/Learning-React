import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../components/Config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmerr";
const RestaurantMenu = () => {
  const param = useParams();
  const { resId } = param;

  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=223"
    );
    const result = await response.json();
    setRestaurant(result?.data);
    console.log(result.data);
    setMenu(
      result?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card.itemCards
    );
    // console.log(data);
    // console.log(menu);
  }

  return (
    <div>
      <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
      <img
        src={
          IMG_CDN_URL +
          restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
      />
      <p>Restaurant id: {resId}</p>
      <h4>{restaurant?.cards[0]?.card?.card?.info?.city}</h4>
      <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
      <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} Stars</h3>
      <div>
        <h1>Menu:</h1>
        <ul>
          {menu.map((item) => (
            <li key={item.card?.info?.id}> {item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
