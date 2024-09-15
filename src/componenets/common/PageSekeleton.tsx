import { useEffect, useState } from "react";
import Card from "./Card";
import H1 from "./H1";
interface IPageSekelton {
  fetchUrl: string;
  title: string;
}
export default function PageSkeleton({ fetchUrl, title }: IPageSekelton) {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        fetch(fetchUrl)
          .then((res) => res.json())
          .then((json) => setItems(json));
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, [fetchUrl]);
  return (
    <div className="p-5 wide:flex wide:flex-col wide:place-items-center mt-5">
      <H1>{`${title} FURNITURE`}</H1>
      <div className="grid min-w-[1000px] grid-cols-3 gap-24 p-6">
        {items &&
          items.products.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.images[0]}
            />
          ))}
      </div>
    </div>
  );
}
