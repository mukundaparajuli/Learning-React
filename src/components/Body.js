import React, { useState, useEffect } from "react";
import { RestaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filteredData = restaurants
    .slice(3, 11)
    .filter((restaurant) =>
      restaurant?.card?.card?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );
  console.log(filteredData);
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  async function getRestaurantData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const data = await response.json();
      setOriginalData(data?.data?.cards);
      setRestaurants(data?.data?.cards);
      console.log(data);
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

  return (
    <>
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

      <div className="cards">
        {console.log(restaurants.length)}
        {restaurants.length > 3
          ? restaurants
              .slice(3, 11)
              .map((restaurant, index) => (
                <RestaurantCard key={index} {...restaurant?.card?.card?.info} />
              ))
          : restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant?.card?.card?.info} />
            ))}
      </div>
    </>
  );
};
export default Body;
