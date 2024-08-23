"use client";

import { LuMenu, LuX } from "react-icons/lu";
import OpenBook from "@/public/open-book.svg";

export interface NavBarProps {
  navItems: string[];
}

const NavBar = ({ navItems }: NavBarProps) => {
  return <div className="gutter-x"></div>;
};

export { NavBar };
