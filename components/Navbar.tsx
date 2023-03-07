import React, { useEffect, useRef } from "react";
import logo from "../public/images/logo.png";
import { SlMagnifier } from "react-icons/sl";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import AccountInfo from "./AccountInfo";
import { NavItem } from "./Navitem";
import Mobilemenu from "./Mobilemenu";

const Navbar: React.FC = () => {
  let profileImage;
  const [showAccountMenu, setShowAccountMenu] = React.useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  return (
    <nav className="z-10 w-full fixed select-none">
      <div className="px-4 md:px-16 py-8 gap-7 flex items-center justify-items-stretch">
        <img src={logo.src} alt="" className="h-4 md:h-7" />
        <div className="hidden lg:flex gap-8">
          <NavItem label={"Home"} />
          <NavItem label={"Series"} />
          <NavItem label={"Films"} />
          <NavItem label={"New & Popular"} />
          <NavItem label={"My List"} />
          <NavItem label={"Browse by Language"} />
        </div>
        {/* Browsw menu on smaller screens */}
        <div className="lg:hidden flex items-center gap-2 relative">
          <p>Browse</p>
          <HiOutlineChevronDown
            onClick={() => {
              setShowMobileMenu((prev) => !prev);
            }}
            size={18}
            className={`cursor-pointer transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <Mobilemenu showMenu={showMobileMenu} />
          {/* --------------------------- */}
        </div>
        <aside className="ml-auto flex gap-6 items-center relative">
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
