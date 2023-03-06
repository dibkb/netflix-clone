import React from "react";
import { NavItem } from "./Navitem";
interface Mobilemenu {
  showMenu: boolean;
}
const Mobilemenu: React.FC<Mobilemenu> = ({ showMenu }) => {
  if (!showMenu) return null;
  return (
    <div className="absolute top-8 border-2 border-gray-800 w-56 flex flex-col items-center gap-3 p-3">
      <NavItem label={"Home"} />
      <NavItem label={"Series"} />
      <NavItem label={"Films"} />
      <NavItem label={"New & Popular"} />
      <NavItem label={"My List"} />
      <NavItem label={"Browse by Language"} />
    </div>
  );
};

export default Mobilemenu;
