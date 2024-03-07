import { Outlet } from "react-router-dom";
import Logo from "../ui/Logo";
import SidebarNav from "./SidebarNav";

const SideBar = () => {
  return (
    <aside className="flex h-[45%] w-full flex-col justify-start overflow-hidden bg-gray-800 py-4 md:h-full md:max-w-[350px] lg:h-full lg:max-w-[400px]">
      <Logo className="hidden md:flex" />
      <SidebarNav />
      <Outlet />
    </aside>
  );
};

export default SideBar;
