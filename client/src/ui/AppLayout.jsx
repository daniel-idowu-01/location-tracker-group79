import { Outlet } from "react-router-dom";
import LinkButton from "./LinkButton";

import bgImage from "./../public/assets/bgImage.jpg";
import Logo from "./Logo";

function AppLayout() {
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
      <header className="relative z-10 flex h-max  w-full  justify-between px-4 py-4 md:p-4">
        <Logo />
        <LinkButton to="login" label="login" className="py-1" />
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
