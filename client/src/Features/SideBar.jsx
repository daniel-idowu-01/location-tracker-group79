import { Outlet } from "react-router-dom";
import Logo from "../ui/Logo";
import SidebarNav from "./SidebarNav";

const SideBar = () => {
  return (
    <aside className="flex h-1/2 w-full flex-col justify-start bg-gray-800 px-5 py-4 md:h-full lg:max-w-[400px]">
      <Logo className="hidden lg:flex" />
      <SidebarNav />
      <Outlet />
    </aside>
  );
};

export default SideBar;
