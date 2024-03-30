/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa6";
// import { FaEllipsisVertical } from "react-icons/fa6";
import { useAuth } from "../hooks/useAuth";

const UserProfile = ({ className }) => {
  const { user } = useAuth();
  const userName = user?.userName?.split(" ")[0];
  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-zinc-300 sm:h-8 sm:w-8">
        <FaUser />
      </div>

      <p className={`hidden text-xs capitalize md:block ${className} `}>
        Hello, {userName ?? "User Doe"}
      </p>
      {/* <FaEllipsisVertical className="block md:hidden" /> */}
    </div>
  );
};

export default UserProfile;
