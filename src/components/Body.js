import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmerr";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  async function getRestaurantData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setOriginalData(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestaurants(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurant data: ", error);
    }
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  const handleSearch = () => {
    const filteredData = filterData(searchText, restaurants);
    setRestaurants(filteredData);
  };
  const clear = () => {
    setRestaurants(originalData);
    setSearchText("");
  };

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div>
        <h1>It seems you are offline.</h1>
        <h1>Please check your Internet Connection.</h1>
      </div>
    );
  } else {
    return (
      <div className="bg-blue-100">
        <div className="p-2 m-2 h-12 py-6">
          <input
            type="text"
            className="h-8 border-2 border-solid border-purple-900"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-purple-900 text-white h-8 m-2 px-10 border-2 border-solid hover:bg-white hover:text-purple-900 hover:border-purple-900"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="bg-purple-900 text-white h-8 m-2 px-10 border-2 border-solid hover:bg-white hover:text-purple-900 hover:border-purple-900"
            onClick={clear}
          >
            Clear
          </button>
        </div>
        {/* {console.log(restaurants)} */}
        <div className="flex m-8 flex-wrap justify-evenly">
          {restaurants.length == 0 ? (
            <Shimmer />
          ) : (
            restaurants.map((restaurant, index) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard
                  key={index}
                  {...restaurant?.info}
                  className="restaurantCard"
                />
              </Link>
            ))
          )}
        </div>
      </div>
    );
  }
};
export default Body;
