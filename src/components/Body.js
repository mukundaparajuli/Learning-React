import { RestaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// what are hooks?
// what is useState?
// what is state?

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchText)
  );
  return filteredData;
}


const Body = () => {
  //   searchtext is a local state variable
  //   useState hook returns an array
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(RestaurantList);
  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value==>whatever you type in search box
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const data = filterData(searchText, restaurant);
            setRestaurant(data);
            console.log(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="cards">
        {restaurant.map((restaurant, index) => {
          return <RestaurantCard {...restaurant} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
