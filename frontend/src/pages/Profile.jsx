import React from "react";
import { useSelector } from "react-redux";
import { Camera } from "lucide-react";
import { uploadProfilePic } from "../util/Api";

const Profile = () => {
  const authUser = useSelector((Store) => Store.Auth.authUser);
  console.log(authUser);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadProfilePic(file, setProfilePic);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center relative flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img
              src={authUser.profilePic || "/avatar.png"}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <label
            htmlFor="avatar-upload"
            className="absolute bottom-0 right-0 bg-primary p-2 rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
          >
            <Camera className="w-5 h-5 text-white" />
            <input
              type="file"
              id="avatar-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <h1 className="text-xl font-bold text-gray-800">Hi, {authUser.name}</h1>
      </div>
    </div>
  );
};

export default Profile;
