import PageSkeleton from "../../common/PageSekeleton";
const fetchUrl = "https://dummyjson.com/products/category/furniture";
const title = "DINING ROOM";
export default function Dining() {
  return PageSkeleton({ title, fetchUrl });
}
