import { Outlet } from "react-router-dom";
import Header from "./componenets/common/Header";

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="w-full flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
