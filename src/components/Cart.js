import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div className="flex">
        <div className="text-[32px] font-bold m-3 p-2">
          Cart-{cartItems.length}
        </div>
        <button
          className="bg-green-200 m-3 p-2"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex m-8 flex-wrap justify-evenly">
        {cartItems.map((item, index) => (
          <FoodItems
            key={index}
            {...item?.card?.info}
            className="restaurantCard"
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;
