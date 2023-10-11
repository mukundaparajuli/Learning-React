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
  return (
    <div className="header">
      <Title />
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
