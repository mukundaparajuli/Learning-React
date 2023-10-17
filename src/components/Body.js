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
        // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=223"
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
      <div>
        <div className="searchContainer">
          <input
            type="text"
            className="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
          <button className="clrBtn" onClick={clear}>
            Clear
          </button>
        </div>
        {/* {console.log(restaurants)} */}
        <div className="cards">
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
