import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmerr";


function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
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
        "https://www.swiggy.com/mapi/homepage/getCards?lat=30.3164945&lng=78.03219179999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const data = await response.json();
      setOriginalData(
        data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestaurants(
        data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
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

      <div className="cards">
        {restaurants.length == 0 ? (
          <Shimmer />
        ) : (
          restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant?.info} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
