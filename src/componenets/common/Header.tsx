import { Link, useLocation } from "react-router-dom";
import H1 from "./H1";
import H3 from "./H3";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const isActive = (path: string) => currentPath === `/${path.toLowerCase()}`;

  return (
    <header className="w-screen border-b border-solid flex  border-gray-300 p-5 wide:justify-center">
      <div className="flex w-full max-w-[2000px] items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="mr-5">
            <H1>CRIMSONAL</H1>
          </Link>
          <nav className="flex gap-4">
            {["living", "dining", "bedroom"].map((path) => (
              <Link
                key={path}
                to={path}
                className={
                  isActive(path) ? "border-b-4 border-solid border-black" : ""
                }
              >
                <H3>{path.toUpperCase()}</H3>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
