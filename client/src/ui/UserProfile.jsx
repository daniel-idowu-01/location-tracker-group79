import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const UserProfile = ({ className, onImageChange }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    onImageChange(selectedImage);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      <label htmlFor="profileImage" className="cursor-pointer">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Profile" className="rounded-full h-8 w-8 sm:h-10 sm:w-10 object-cover" />
        ) : (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-300 sm:h-8 sm:w-8">
            <FaUser />
          </div>
        )}
        <input
          type="file"
          id="profileImage"
          name="profileImage"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      <p className={`text-xs ${className}`}>Hello, John Doe</p>
    </div>
  );
};

export default UserProfile;
