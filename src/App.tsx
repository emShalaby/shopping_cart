import { Outlet } from "react-router-dom";
import Header from "./componenets/common/Header";

export default function App() {
  return (
    <div className="">
      <Header />
      <main className="w-full ">
        <Outlet />
      </main>
    </div>
  );
}
