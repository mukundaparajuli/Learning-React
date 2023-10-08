import { useState } from "react";

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
  const [title, setTitle] = useState("FoodVilla");
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button
        onClick={() => {
          setTitle("Mukunda");
        }}
      >
        change the title
      </button>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
//   you can just export default only once
// exporting by default
// exporting by name
