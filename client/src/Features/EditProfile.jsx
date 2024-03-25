import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

const EditProfile = ({ onClose, userData }) => {
  const [editedUserData, setEditedUserData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleSaveChanges = () => {
    onClose();
  };

  return (
    <div className="absolute right-0 top-0 z-[1000] max-h-max w-full max-w-[300px] transform bg-gray-800 px-4 py-3 pb-4 transition-all duration-500 ease-in-out md:max-w-[400px]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-zinc-300">Edit Profile</h2>
        <button className="bg-inherit hover:bg-inherit" onClick={onClose}>
          <span className="flex items-center justify-center gap-x-1 text-zinc-600">
            <FaSave className="text-gray-300" />
          </span>
        </button>
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="text-zinc-400 block mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedUserData.name}
          onChange={handleChange}
          className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded-md text-zinc-200 focus:outline-none focus:border-zinc-400"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="text-zinc-400 block mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={editedUserData.email}
          onChange={handleChange}
          className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded-md text-zinc-200 focus:outline-none focus:border-zinc-400"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="text-zinc-400 block mb-1">Address</label>
        <textarea
          id="address"
          name="address"
          value={editedUserData.address.city}
          onChange={handleChange}
          className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded-md text-zinc-200 focus:outline-none focus:border-zinc-400"
        />
      </div>
      <button
        onClick={handleSaveChanges}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md focus:outline-none focus:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfile;
