import { useState } from "react";
import Button from "../ui/Button";
import UserProfile from "../ui/UserProfile";
import { FaTimes } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import useRefreshToken from "../hooks/useRefreshToken";

const User = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const { user, handleLogOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    handleLogOut();
    navigate("/login", { replace: true });
  };

  const handleShowProfile = () => {
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
        <section className="mt-5 flex flex-col gap-5 text-zinc-300">
          {/* address */}
          <div>
            <p className="mb-2 border-b border-zinc-300 pb-1 text-xs">
              Address
            </p>
            <article>
              <p className="text-xs">Lagos, Nigeria</p>
              <p className="text-base md:text-lg">20 Crown Road</p>
              <p className="text-xs">ZIP 2001</p>
            </article>
          </div>

          {/* contact */}
          <div>
            <p className="mb-2 border-b border-zinc-300 pb-1 text-xs">
              Contact
            </p>
            <article>
              <p className="text-xs">Phone Number</p>
              <p className="text-base md:text-lg">+234 802 374 8232</p>
              <p className="mt-2 text-xs">E-mail</p>
              <p className="text-base md:text-lg">{user.userEmail}</p>
            </article>
          </div>

          <Button
            onClick={handleLogOutClick}
            className="h-10 w-full font-semibold uppercase text-zinc-50 md:mt-3 md:h-10"
          >
            Sign Out
            <FiLogOut className="ml-1 text-lg" />
          </Button>
        </section>

        {/* <div className="mt-[60px] flex min-h-40 rounded-md bg-gray-700 text-center text-zinc-100 sm:min-h-80">
          <h1 className="m-auto text-sm md:text-base">User</h1>
        </div> */}
      </div>
    </>
  );
};

export default User;
