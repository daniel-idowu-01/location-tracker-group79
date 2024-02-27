import { NavLink } from "react-router-dom";

const SidebarNav = () => {
  return (
    <nav className="my-7 w-full">
      <ul className="mx-auto flex w-1/2 max-w-max flex-row items-center justify-center rounded-md bg-gray-700 text-zinc-100">
        <li className="flex list-none items-center justify-center rounded-sm px-5 py-2">
          {" "}
          <NavLink to="locations"> Destinations</NavLink>
        </li>{" "}
        <li className="flex list-none items-center justify-center rounded-sm px-5 py-2">
          <NavLink to="info" className="block h-full w-full">
            {" "}
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
