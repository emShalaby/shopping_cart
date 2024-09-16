import CartItem from "../../types/CartItems";
type TMiniCard = CartItem & {
  onDelete: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function MiniCard({
  imageUrl,
  price,
  quantity,
  title,
  id,
  description,
  onDelete,
}: TMiniCard) {
  return (
    <div className="m-3 flex gap-2 border-b-2 p-2">
      <div className="flex-1">
        <img src={imageUrl} alt="" />
      </div>
      <div className="flex-3 flex flex-col flex-wrap justify-between">
        <p>{title}</p>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="flex-2 flex flex-col justify-between">
        <button className="self-end font-bold" onClick={() => onDelete(id)}>
          X
        </button>

        <p>{`$${price}`}</p>
      </div>
    </div>
  );
}
