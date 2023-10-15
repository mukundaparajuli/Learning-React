import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../components/Config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmerr";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
    );
    const result = await response.json();
    console.log(result);
    setRestaurant(result);
  }

  return (
    <div className="info">
      <div>
        <h1>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h1>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <p>Restaurant Id:{resId}</p>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.avgRating} Stars</h3>
      </div>
      <div>
        <h2>MENU</h2>
        <table>
          <thead>
            <th>
              <h2>Items</h2>
            </th>
            <th>
              <h2>Price</h2>
            </th>
          </thead>
          <tbody>
            {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
              (items) => (
                <tr>
                  <td key={items?.card?.info?.id}>{items?.card?.info?.name}</td>
                  <td>Rs {items?.card?.info?.price}/- </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RestaurantMenu;
