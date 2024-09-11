import H1 from "./H1";
import H3 from "./H3";
export default function Header() {
  return (
    <div className="flex border-b border-solid border-gray-300 p-5">
      <div className="flex place-items-center gap-4">
        <div className="mr-5">
          <H1>CRIMSONAL</H1>
        </div>
        <H3>LIVING</H3>
        <H3>DINING</H3>
        <H3>BEDROOM</H3> 
      </div>
      <div className="ml-auto"></div>
    </div>
  );
}
