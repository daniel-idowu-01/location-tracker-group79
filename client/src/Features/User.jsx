import { useState } from "react";
import Button from "../ui/Button";
import UserProfile from "../ui/UserProfile";
import { FaTimes } from "react-icons/fa";

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
          <UserProfile className="text-sm text-zinc-300 md:text-base" />
          <Button
            className="space-x-1 bg-inherit hover:bg-inherit"
            onClick={handleHideProfile}
          >
            <span className="flex items-center justify-center gap-x-1 text-zinc-600">
              <FaTimes className="text-gray-300" />
            </span>
          </Button>
        </div>

        <div className="mt-[60px] flex min-h-40 rounded-md bg-gray-700 text-center text-zinc-100 sm:min-h-80">
          <h1 className="m-auto text-sm md:text-base">User</h1>
        </div>
      </div>
    </>
  );
};

export default User;
