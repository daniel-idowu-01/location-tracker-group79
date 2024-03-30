import { Outlet, useNavigate } from "react-router-dom";

import bgImage from "./../public/assets/bgImage.jpg";
import Logo from "./Logo";
import { useAuth } from "../hooks/useAuth";
import Button from "./Button";

function AppLayout() {
  const { user, handleLogOut } = useAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    user?.accessToken ? handleLogOut() : navigate("/login");
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
            rgba(36, 42, 46, 0.6),
            rgba(36, 42, 46, 0.6)
          ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="w- relative z-10 flex  h-max  w-full justify-between px-4 py-4 md:p-4">
        <Logo className="text-zinc-100" />
        <Button
          onClick={handleClick}
          className=" flex w-max items-center justify-center rounded bg-blue-400 px-4 py-1 text-center font-bold tracking-wider text-gray-50 transition duration-300 ease-in-out hover:bg-blue-500"
        >
          {user?.accessToken ? "Log Out" : "Login"}
        </Button>
      </header>
      <main
        className="flex w-full items-center justify-center p-3 md:p-4"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
