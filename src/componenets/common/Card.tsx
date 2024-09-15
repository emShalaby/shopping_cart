import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ICard {
  title: string;
  price: number;
  imageUrl: string;
  id: string;
  description: string;
}

export default function Card({
  title,
  price,
  imageUrl,
  id,
  description,
}: ICard) {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const path = location.pathname;
  return (
    <Link
      className="flex flex-col gap-3 p-2"
      to={`${path}` + "/" + `${id}`}
      state={{ title, price, imageUrl, description, id }}
    >
      {isLoading && (
        <div className="absolute h-[200px] w-[300px] animate-pulse" />
      )}
      <img
        src={imageUrl}
        className={`h-[200px] w-[300px] transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        alt={title}
        onLoad={() => setIsLoading(false)}
      />
      <div className="flex justify-between gap-10">
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </Link>
  );
}
