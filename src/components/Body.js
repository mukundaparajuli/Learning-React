import React, { useState, useEffect } from "react";
import { RestaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmerr";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  async function getRestaurantData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const data = await response.json();
      console.log(data);
      // console.log(data.data.cards[3].card.card.info);
      if (data?.data?.cards[3]?.card?.card) {
        setRestaurants(data?.data?.cards[3]?.card?.card)
      } else {
        console.error("Invalid API response format");
      }
    } catch (error) {
      console.error("Error fetching restaurant data: ", error);
    }
  }

  useEffect(() => {
    getRestaurantData();
  }, RestaurantList);

  const handleSearch = () => {
    const filteredData = filterData(searchText, RestaurantList);
    setRestaurants(filteredData);
  };

  return (restaurants.length===0)?<Shimmer/>:(
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
      </div>
      <div className="cards">
        {console.log("Restaurant object:", restaurants)}
        {/* {restaurants.map((restaurant, index) => ( */}
          <RestaurantCard {...restaurants}  />
        {/* ))} */}
      </div>
    </>
  );
};

export default Body;
