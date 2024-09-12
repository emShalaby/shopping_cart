import { Link } from "react-router-dom";
import H1 from "../../common/H1";

export default function Home() {
  return (
    <div
      id="home"
      className="flex h-screen w-screen flex-col items-center justify-center bg-main bg-cover bg-center bg-no-repeat text-center overflow-scroll"
    >
      <div className="text-whitetext-2xl mb-4 md:text-4xl lg:text-5xl">
        <H1>BUY YOUR FURNITURE HERE</H1>
      </div>
      <Link
        to={"dining"}
        className="rounded bg-white px-4 py-2 text-black transition duration-300 hover:bg-gray-200"
      >
        SHOP NOW
      </Link>
    </div>
  );
}
