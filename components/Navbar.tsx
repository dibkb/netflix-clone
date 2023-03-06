import React from "react";
import logo from "../public/images/logo.png";
import { SlMagnifier } from "react-icons/sl";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import AccountInfo from "./AccountInfo";
interface NavItem {
  label: string;
}
const NavItem: React.FC<NavItem> = ({ label }) => {
  return (
    <p className="cursor-pointer text-white hover:underline underline-offset-3">
      {label}
    </p>
  );
};
const Navbar: React.FC = () => {
  const profileImage = localStorage.getItem("netflix-clone-picture");
  const [showAccountMenu, setShowAccountMenu] = React.useState<boolean>(false);
  return (
    <nav className="w-full fixed select-none">
      <div className="px-4 md:px-16 py-8 gap-8 flex items-center justify-items-stretch">
        <img src={logo.src} alt="" className="h-4 md:h-7" />
        <div className="flex gap-8">
          <NavItem label={"Home"} />
          <NavItem label={"Series"} />
          <NavItem label={"Films"} />
          <NavItem label={"New & Popular"} />
          <NavItem label={"My List"} />
          <NavItem label={"Browse by Language"} />
        </div>
        <aside className="ml-auto flex gap-8 items-center relative">
          <AccountInfo showMenu={showAccountMenu} />
          <SlMagnifier size={18} className="cursor-pointer" />
          <MdOutlineNotificationsNone size={24} className="cursor-pointer" />
          <div className="flex items-center gap-2 relative">
            <img src={profileImage} alt="" className="h-8 rounded-md" />
            <HiOutlineChevronDown
              onClick={() => {
                setShowAccountMenu((prev) => !prev);
              }}
              size={18}
              className={`cursor-pointer transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
