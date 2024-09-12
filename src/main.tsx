import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Living from "./componenets/pages/Living/Living";
import Dining from "./componenets/pages/Dining/Dining";
import Bedroom from "./componenets/pages/Bedroom/Bedroom";
import Home from "./componenets/pages/Home/Home";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "living",
        element: <Living />,
      },
      {
        path: "dining",
        element: <Dining />,
      },
      {
        path: "bedroom",
        element: <Bedroom />,
      },
    ],
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
