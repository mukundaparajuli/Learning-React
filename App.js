import React from "react";
import ReactDOM from "react-dom/client";

// header
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

const RestauranList = [{
  name: "KFC",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/1/18740971/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg?output-format=webp",
  cusines: ["Burger", "Fast Food", "Biryani"],
  rating: "4.3",
},{
  name: "Burger King",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/1/18740971/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg?output-format=webp",
  cusines: ["Burger", "Fast Food", "Biryani"],
  rating: "4.5",
},{
  name: "Pizza Hut",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/1/18740971/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg?output-format=webp",
  cusines: ["Burger", "Fast Food", "Biryani"],
  rating: "4.0",
},{
  name: "KFC",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/1/18740971/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg?output-format=webp",
  cusines: ["Burger", "Fast Food", "Biryani"],
  rating: "4.3",
},{
  name: "KFC",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/1/18740971/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg?output-format=webp",
  cusines: ["Burger", "Fast Food", "Biryani"],
  rating: "4.3",
},{
  name: "KFC",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/1/18740971/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg?output-format=webp",
  cusines: ["Burger", "Fast Food", "Biryani"],
  rating: "4.3",
},{
  name: "KFC",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/1/18740971/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg?output-format=webp",
  cusines: ["Burger", "Fast Food", "Biryani"],
  rating: "4.3",
}];

const RestaurantCard = () => {
  return (
    <div className="card">
      <div>
      <img src={RestauranList[1].image} />
      <h3>{RestauranList[1].name}</h3>
      <h4>{RestauranList[1].cusines.join(", ")}</h4>
      <h4>{RestauranList[1].rating} stars</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="cards">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
