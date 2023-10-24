import { IMG_CDN_URL } from "../Config";
const FoodItems = ({ imageId, name, description, price, category }) => {
  return (
    <div className="flex">
      <div className="m-4 w-[300px] h-[440px] flex justify-center rounded-xl hover:shadow-2xl border-2 border-gray p-4 hover:rounded-xl bg-white">
        <div>
          <img
            src={IMG_CDN_URL + imageId}
            className="w-44 h-44 flex justify-center"
          />
          <h3 className="text-[16px] font-bold">{name}</h3>
          <h3 className="text-[14px] font-bold">Rs {price / 100}</h3>
          <h3 className="italic text-[14px]">Category: {category}</h3>
          <p className="text-[12px] py-4 overflow-hidden">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default FoodItems;
