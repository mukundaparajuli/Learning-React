import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import useRestaurantMenu from "../utils/useRestaurantmenu";
// import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

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
                  <td>Rs {items?.card?.info?.price / 100}/- </td>
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
