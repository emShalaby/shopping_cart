import { useState } from "react";

interface ICard {
  title: string;
  price: string;
  imageUrl: string;
}

export default function Card({ title, price, imageUrl }: ICard) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      {isLoading && <div className="h-[200px] animate-pulse" />}
      <img
        src={imageUrl}
        className={`max-h-[200px] transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        alt={title}
        onLoad={() => setIsLoading(false)}
      />
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
