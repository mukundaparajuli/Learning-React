import { RestauranList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// what are hooks?
// what is useState?
// what is state?

const Body = () => {
  //   searchtext is a local state variable
  //   useState hook returns an array
  const [searchText, setSearchText] = useState("Burger King"); //to create state variable

  const [searchClick, setSearchClick] = useState(false);
  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value==>whatever you type in search box
            setSearchText(e.target.value);
          }}
        />
        <button className="searchBtn" onClick={()=>{
            setSearchClick(true);
        }}>Search</button>
      </div>
      <div className="cards">
        {RestauranList.map((restaurant, index) => {
          return <RestaurantCard {...restaurant} key={index} />;
        })}
      </div>
    </>
  );
};
export default Body;
