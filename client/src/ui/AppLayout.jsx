import { Outlet, Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import pawLogo from "./../public/assets/pawLogo.png";
import bgImage from "./../public/assets/bgImage.jpg";

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
        <Link to="/">
          {" "}
          <div className=" my-auto flex h-12 items-center justify-center gap-x-2">
            <img src={pawLogo} alt="" className="h-3/4 sm:h-[85%]" />{" "}
            <p className=" text-2xl font-extrabold text-zinc-100 md:text-3xl">
              PawPrints
            </p>
          </div>
        </Link>

        <LinkButton to="/login" label="login" className="py-1" />
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
