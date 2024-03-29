/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import pawLogo from "./../public/assets/pawLogo.png";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      {" "}
      <div
        className={`my-auto flex h-12 items-center justify-center gap-x-2 text-2xl font-extrabold md:text-3xl ${className}`}
      >
        <img src={pawLogo} alt="" className="h-3/4 sm:h-[85%]" />{" "}
        <p className="">PawPrints</p>
      </div>
    </Link>
  );
};

export default Logo;
