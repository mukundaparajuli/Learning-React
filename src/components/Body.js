import { RestaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

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

  // Callback function and a dependency array is passed when a useEffect function is defined
  // inside the dependency array we put nothing (leave empty) if we dont want to call the function even when the component rerenders
  // but if we want to call the useEffect function at a specific time such as when the searchText changes we put searchText inside the array
  // useEffect is called at a specific time

  useEffect(() => { 
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=30.3164945&lng=78.03219179999999");
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.info)
  }

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
