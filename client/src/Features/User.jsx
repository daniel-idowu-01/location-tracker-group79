import { useState } from "react";
import Button from "../ui/Button";
import UserProfile from "../ui/UserProfile";
import { FaTimes } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const User = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleShowProfile = () => {
    console.log("yes");
    setShowUserProfile(true);
  };

  const handleHideProfile = () => {
    setShowUserProfile(false);
  };

  return (
    <>
      <Button
        className="space-x-1 bg-inherit hover:bg-inherit"
        onClick={handleShowProfile}
      >
        <span className="flex items-center justify-center gap-x-1 text-zinc-600">
          <UserProfile className="text-sm text-zinc-600 md:text-base" />
        </span>
      </Button>
      <div
        className={` absolute right-0 top-0 z-[1000] max-h-max w-full max-w-[200px] transform bg-gray-800 px-4  py-3 pb-4 transition-all duration-500 ease-in-out md:max-w-[300px] ${showUserProfile ? "translate-x-0" : "-translate-x-[-120%]"}`}
      >
        <div className="flex items-center justify-between">
          <UserProfile className="text-xs text-zinc-300 md:text-base" />
          <Button
            className="space-x-1 bg-inherit hover:bg-inherit"
            onClick={handleHideProfile}
          >
            <span className="flex items-center justify-center gap-x-1 text-zinc-600">
              <FaTimes className="text-gray-300" />
            </span>
          </Button>
        </div>


        {/*  */}
        <section className="flex flex-col gap-5 mt-5 text-zinc-300">
          {/* address */}
          <div>
            <h3 className="text-m pb-1 mb-2 border-b border-zinc-300">
              Address
            </h3>
            <article>
              <p className="text-xs">Lagos, Nigeria</p>
              <p className="text-base md:text-lg">20 Crown Road</p>
              <p className="text-xs">ZIP 2001</p>
            </article>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-m pb-1 mb-2 border-b border-zinc-300">
              Contact
            </h3>
            <article>
              <p className="text-xs">Phone Number</p>
              <p className="text-base md:text-m">+234 802 374 8232</p>
              <p className="text-xs mt-2">E-mail</p>
              <p className="text-base md:text-m">johndoe@gmail.com</p>
            </article>
          </div>

          <Link to="/">
          <Button className="md:mt-3 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">
            Sign Out
            <FiLogOut className="ml-1 text-lg" />
          </Button>
          </Link>
        </section>

        {/* <div className="mt-[60px] flex min-h-40 rounded-md bg-gray-700 text-center text-zinc-100 sm:min-h-80">
          <h1 className="m-auto text-sm md:text-base">User</h1>
        </div> */}
      </div>
    </>
  );
};

export default User;
