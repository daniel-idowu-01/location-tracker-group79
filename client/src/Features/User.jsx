import React, { useState } from "react";
import Button from "../ui/Button";
import UserProfile from "../ui/UserProfile";
import { FaTimes, FaEdit } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import EditProfile from "./EditProfile";

const User = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    address: {
      city: "Lagos",
      country: "Nigeria",
      street: "20 Crown Road",
      zip: "ZIP 2001"
    },
    phoneNumber: "+234 802 374 8232"
  });

  const handleShowProfile = () => {
    setShowUserProfile(true);
  };

  const handleHideProfile = () => {
    setShowUserProfile(false);
  };

  const handleEditProfile = () => {
    setShowEditProfile(true);
  };

  const handleCloseEditProfile = () => {
    setShowEditProfile(false);
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
      <div className={`absolute right-0 top-0 z-[1000] max-h-max w-full max-w-[200px] transform bg-gray-800 px-4 py-3 pb-4 transition-all duration-500 ease-in-out md:max-w-[300px] ${showUserProfile ? "translate-x-0" : "-translate-x-[-120%]"}`}>
        <div className="flex items-center justify-between">
          <UserProfile className="text-xs text-zinc-300 md:text-base" />
          <Button className="space-x-1 bg-inherit hover:bg-inherit" onClick={handleHideProfile}>
            <span className="flex items-center justify-center gap-x-1 text-zinc-600">
              <FaTimes className="text-gray-300" />
            </span>
          </Button>
        </div>
        <section className="flex flex-col gap-5 mt-5 text-zinc-300">
          {/* Address */}
          <div>
            <p className="text-xs pb-1 mb-2 border-b border-zinc-300">
              Address
            </p>
            <article>
              <p className="text-xs">{userData.address.city}, {userData.address.country}</p>
              <p className="text-base md:text-lg">{userData.address.street}</p>
              <p className="text-xs">{userData.address.zip}</p>
            </article>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs pb-1 mb-2 border-b border-zinc-300">
              Contact
            </p>
            <article>
              <p className="text-xs">Phone Number</p>
              <p className="text-base md:text-lg">{userData.phoneNumber}</p>
              <p className="text-xs mt-2">E-mail</p>
              <p className="text-base md:text-lg">{userData.email}</p>
            </article>
          </div>
          <Button onClick={handleEditProfile} className="text-sm text-zinc-300 hover:text-zinc-100">
            <FaEdit className="mr-1" /> Edit Profile
          </Button>
          <Button className="md:mt-3 h-10 w-full font-semibold uppercase text-zinc-50 md:h-10">
            Sign Out
            <FiLogOut className="ml-1 text-lg" />
          </Button>
        </section>
      </div>

      {showEditProfile && <EditProfile onClose={handleCloseEditProfile} userData={userData} />}

    </>
  );
};

export default User;
