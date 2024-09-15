import { useState } from "react";

interface ICard {
  title: string;
  price: string;
  imageUrl: string;
}

export default function Card({ title, price, imageUrl }: ICard) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <button className="flex flex-col gap-3 p-2">
      {isLoading && <div className="h-[200px] w-[300px] animate-pulse absolute" />}
      <img
        src={imageUrl}
        className={`h-[200px] w-[300px] transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        alt={title}
        onLoad={() => setIsLoading(false)}
      />
      <div className="flex gap-10 justify-between">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </button>
  );
}
