import H1 from "./H1";
import MiniCard from "./MiniCard";
import CartItem from "../../types/CartItems";
import { useCart } from "../../context/CartContext";
import { useMemo } from "react";
interface ICart {
  isOpen: boolean;
  onClose: () => void;
}
export default function Cart({ isOpen, onClose }: ICart) {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total: number, product: CartItem) =>
        total + product.price * product.quantity,
      0,
    );
  }, [cartItems]);
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed bottom-0 top-0 z-40 h-full w-full bg-black bg-opacity-50"
        />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-96 transform bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col`}
      >
        <div className="flex place-items-center justify-between border-b-2 p-3">
          <div className="">
            <H1>CART</H1>
          </div>
          <button onClick={onClose} className="">
            <H1>x</H1>
          </button>
        </div>
        <div>
          {cartItems.map((item: CartItem) => (
            <MiniCard
              key={item.id}
              price={item.price}
              quantity={item.quantity}
              title={item.title}
              description={item.description}
              id={item.id}
              imageUrl={item.imageUrl}
              onDelete={removeFromCart}
            />
          ))}
        </div>
        <div className="mb-5 mt-auto flex flex-col gap-3 p-3">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="text-lg font-bold">{`$${totalPrice}`}</p>
          </div>
          <button
            className="border-2 border-solid border-black bg-gray-300 text-black"
            onClick={onClose}
          >
            Continue Shopping
          </button>
          <button className="bg-black text-white">Checkout</button>
        </div>
      </div>
    </>
  );
}
