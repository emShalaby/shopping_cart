import H1 from "./H1";
import H3 from "./H3";

interface ICart {
  isOpen: boolean;
  onClose: () => void;
}
export default function Cart({ isOpen, onClose, children }: ICart) {
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
        } z-50`}
      >
        {" "}
        <div className="flex place-items-center justify-between p-3 border-b-2 ">
          <div className="">
            <H1>CART</H1>
          </div>
          <button onClick={onClose} className="">
            <H1>x</H1>
          </button>
        </div>
      </div>
    </>
  );
}
