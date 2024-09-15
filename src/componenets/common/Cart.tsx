import H1 from "./H1";
import MiniCard from "./MiniCard";
import CartItem from "../../types/CartItems";
interface ICart {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}
export default function Cart({ isOpen, onClose, items }: ICart) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="absolute top-0 z-40 h-full w-full bg-black bg-opacity-50"
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
          {items.map((item) => (
            <MiniCard
              key={item.id}
              price={item.price}
              quantity={item.quantity}
              title={item.title}
              description={item.description}
              id={item.id}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
