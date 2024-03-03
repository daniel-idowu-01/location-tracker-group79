import { NavLink } from "react-router-dom";

const SidebarNav = () => {
  return (
    <nav className="mb-3 w-full sm:my-6">
      <ul className="mx-auto flex w-1/2 max-w-max flex-row items-center justify-center rounded-md bg-gray-700 text-sm text-zinc-100 sm:text-base">
        <li className="flex list-none items-center justify-center rounded-sm px-4 py-2">
          {" "}
          <NavLink to="locations"> Visited Locations</NavLink>
        </li>{" "}
        {/* <li className="flex list-none items-center justify-center rounded-sm px-5 py-2">
          <NavLink to="info" className="block h-full w-full">
            {" "}
            Info
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default SidebarNav;
