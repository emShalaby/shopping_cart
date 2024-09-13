import { Link } from "react-router-dom";
import H1 from "../../common/H1";

export default function Home() {
  return (
    <div
      id="home"
      className="flex h-screen w-screen flex-col items-center justify-center bg-main bg-cover bg-center bg-no-repeat text-center"
    >
      <div className="absolute z-10 flex h-screen w-screen bg-black opacity-30"></div>

      <div className="z-20 mb-4 text-[#FFFFFF]">
        <H1>BUY YOUR FURNITURE HERE</H1>
      </div>
      <Link
        to={"living"}
        className="z-20 rounded bg-white px-4 py-2 text-black transition duration-300 hover:bg-gray-200"
      >
        SHOP NOW
      </Link>
    </div>
  );
}
