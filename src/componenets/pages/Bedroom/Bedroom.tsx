import PageSkeleton from "../../common/PageSekeleton";
const fetchUrl = "https://dummyjson.com/products/category/furniture";
const title = "BED ROOM";
export default function Bedroom() {
  return PageSkeleton({ title, fetchUrl });
}
