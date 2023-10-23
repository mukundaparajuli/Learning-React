import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import useRestaurantMenu from "../utils/useRestaurantmenu";
// import { useState, useEffect } from "react";
import CartSlice, { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  const dispatch = useDispatch();
  const handleAddItems = (items) => {
    dispatch(addItem(items));
    console.log(CartSlice.items);
  };

  return (
    <div className="flex justify-around">
      <div>
        <div className="font-bold text-[64px] py-4">
          {restaurant?.data?.cards[0]?.card?.card?.info?.name}
        </div>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <p>Restaurant Id:{resId}</p>
        <h3 className="font-bold text-[22px]">
          {restaurant?.data?.cards[0]?.card?.card?.info?.city}
        </h3>
        <h3 className="font-bold text-[22px]">
          {restaurant?.data?.cards[0]?.card?.card?.info?.avgRating} Stars
        </h3>
      </div>
      <div>
        <div className="font-bold text-[40px]">MENU</div>
        <table>
          <thead>
            <th>
              <h2 className="border-black-300 border-3">Items</h2>
            </th>
            <th>
              <h2 className="border-black-300 border-3">Price</h2>
            </th>
          </thead>
          <tbody>
            {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
              (items) => (
                <tr>
                  <td
                    key={items?.card?.info?.id}
                    className="border-black-300 border-2"
                  >
                    {items?.card?.info?.name}
                  </td>
                  <td className=" border-black-300 border-2">
                    Rs {items?.card?.info?.price / 100}/-{" "}
                  </td>
                  <td>
                    <button
                      className="bg-green-100 px-3 py-3 border-black-300 border-2"
                      onClick={() => handleAddItems(items)}
                    >
                      Add Item
                    </button>
                  </td>
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
