import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Living from "./componenets/pages/Living/Living";
import Dining from "./componenets/pages/Dining/Dining";
import Bedroom from "./componenets/pages/Bedroom/Bedroom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Living",
    element: <Living />,
  },
  {
    path: "Dining",
    element: <Dining />,
  },
  {
    path: "Bedroom",
    element: <Bedroom />,
  },
]);
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
