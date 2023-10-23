import { IMG_CDN_URL } from "../Config";
const FoodItems = ({ imageId, name, description, price, category }) => {
  return (
    <div className="flex">
      <div className="m-4 w-[250px] h-[440px] rounded-xl hover:shadow-2xl border-2 border-gray p-4 hover:rounded-xl bg-white">
        <div>
          <img
            src={IMG_CDN_URL + imageId}
            className="w-44 h-44 justify-self-center align-self-middle"
          />
          <h3 className="text-xl font-bold">{name}</h3>
          <h3 className="text-[16px] font-bold">Rs {price/100}</h3>
          <h3 className="italic text-[16px]">Category: {category}</h3>
          <p className="text-[16px] py-4 overflow-hidden">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};
export default FoodItems;

