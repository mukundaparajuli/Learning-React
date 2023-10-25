import { useState } from "react";
import { Link } from "react-router-dom";
import Instamart from "./Instamart";
import { useSelector } from "react-redux";
import Logo from "../utils/FoodVilla.png";

const Title = () => {
  return (
    <img
      data-testid="logo"
      src={Logo}
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
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2" data-testid="cart">
              Cart- Items: {cartItems.length}
            </li>
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
