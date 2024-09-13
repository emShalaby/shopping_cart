interface ICard {
  title: string;
  price: string;
  imageUrl: string;
}
export default function Card({ title, price, imageUrl }: ICard) {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
