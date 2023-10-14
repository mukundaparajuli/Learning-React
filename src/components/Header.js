import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <img
      src="https://files.yappe.in/place/full/food-villa-family-restaurant-hotel-4642683.webp"
      alt="FoodVilla"
      className="Logo"
    />
  );
};
const Header = () => {
  const [login, setLogin] = useState("Logged Out");
  const loginAndOut = () => {
    login == "Logged In" ? setLogin("Logged Out") : setLogin("Logged In");
  };
  return (
    <div className="header">
      <Title />
      <div className="navitems">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contacts">
            <li>Contacts</li>
          </Link>
          <Link to="">
            <li>Cart</li>
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
