import { signOut } from "next-auth/react";
import React, { useEffect, useRef } from "react";
interface AccountInfo {
  showMenu: boolean;
}
const AccountInfo: React.FC<AccountInfo> = ({ showMenu }) => {
  let profileImage;
  let profileName;
  useEffect(() => {
    profileImage = localStorage.getItem("netflix-clone-picture");
    profileName = localStorage.getItem("netflix-clone-username");
  }, []);
  if (!showMenu) return null;
  return (
    <div className="absolute rounded-md border-2 border-gray-800 top-12 bg-zinc-900 right-0 w-56">
      <span className="flex gap-3 items-center border-b-2 border-gray-800 p-4">
        <img src={profileImage} alt="Profile pic" className="h-8 rounded-md" />
        <p className="text-sm text-zinc-300 cursor-pointer hover:underline">
          {profileName}
        </p>
      </span>
      <button
        onClick={() => signOut()}
        className="p-4 text-sm text-zinc-300 cursor-pointer hover:underline w-full"
      >
        Sign Out of Netfix
      </button>
    </div>
  );
};

export default AccountInfo;
