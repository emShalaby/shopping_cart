import { useLocation } from "react-router-dom";

export default function ShoppingPage() {
  const location = useLocation();
  const { state } = location;
  const { title, price, imageUrl, description } = state || {};

  return (
    <div className="mt-10 flex w-full wide:justify-center">
      <div className="flex">
        <div className="flex-1">
          <img src={imageUrl} alt="" />
        </div>
        <div className="flex flex-1 flex-col">
          <p>{title}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button className="bg-black text-white">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
