/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa6";

const UserProfile = ({ className }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-300 sm:h-8 sm:w-8">
        <FaUser />
      </div>

      <p className={`text-xs ${className}`}>Hello, John Doe</p>
    </div>
  );
};

export default UserProfile;
