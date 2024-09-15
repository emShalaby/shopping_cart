import { useLocation } from "react-router-dom";
import { useState } from "react";
import H1 from "./H1";
import H3 from "./H3";
import Cart from "./Cart";

export default function ShoppingPage() {
  const location = useLocation();
  const { state } = location;
  const { title, price, imageUrl, description } = state || {};
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  function ToggleCart() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="mt-10 flex w-full wide:justify-center">
      <div className="flex gap-2">
        <div className="w-[50%] md:m-3 md:p-5">
          <div
            className={`max-h-[1000px] min-h-[300px] min-w-[300px] ${isLoading ? "animate-pulse" : ""}`}
          >
            <img
              src={imageUrl}
              alt={title}
              className={`max-h-[1000px] min-h-[300px] min-w-[300px] transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
        <div className="m-2 flex w-[50%] flex-col gap-2 p-2 md:m-3 md:gap-5 md:p-5">
          <H1>{title}</H1>
          <p>{description}</p>
          <H3>{price}</H3>
          <input type="number" className="border-2 border-solid" />
          <button className="bg-black text-white" onClick={ToggleCart}>
            Add to cart
          </button>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={ToggleCart} />
    </div>
  );
}
