import { useState } from "react";
import { Link } from "react-router-dom";
import Instamart from "./Instamart";

const Title = () => {
  return (
    <img
      src="https://files.yappe.in/place/full/food-villa-family-restaurant-hotel-4642683.webp"
      alt="FoodVilla"
      className="h-32 p-2 justify-center"
    />
  );
};
const Header = () => {
  const [login, setLogin] = useState("Logged Out");
  const loginAndOut = () => {
    login == "Logged In" ? setLogin("Logged Out") : setLogin("Logged In");
  };
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg h-32">
      <Title />
      <div>
        <ul className="px-10 py-16 flex">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About Us</li>
          </Link>
          <Link to="/contacts">
            <li className="px-2">Contacts</li>
          </Link>
          <Link to="">
            <li className="px-2">Cart</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <button className="login" onClick={loginAndOut}>
        {login}
      </button>
    </div>
  );
};
export default Header;
