/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import pawLogo from "./../public/assets/pawLogo.png";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      {" "}
      <div
        className={`my-auto flex h-12 items-center justify-center gap-x-2 ${className}`}
      >
        <img src={pawLogo} alt="" className="h-3/4 sm:h-[85%]" />{" "}
        <p className=" text-2xl font-extrabold text-zinc-100 md:text-3xl">
          PawPrints
        </p>
      </div>
    </Link>
  );
};

export default Logo;
