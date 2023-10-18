import { useState, useEffect } from "react";
import { MENU_API_URL } from "../Config";
const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const response = await fetch(MENU_API_URL + resId);
    const result = await response.json();
    console.log(result);
    setRestaurant(result);
  }
  return restaurant;
};

export default useRestaurantMenu;
