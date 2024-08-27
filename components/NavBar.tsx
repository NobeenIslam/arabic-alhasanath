"use client";

import { LuMenu, LuX } from "react-icons/lu";
import OpenBook from "@/public/open-book.svg";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "@/utilities/breakpoints";
import { useEffect, useState } from "react";

export type NavItem = {
  title: String;
  anchorReference: String;
};
export interface NavBarProps {
  navItems: NavItem[];
}

interface MobileNavMenuProps {
  navItems: NavItem[];
  toggleMobileNav: () => void;
  isOpen: boolean;
}

const MobileNavMenu = ({
  navItems,
  toggleMobileNav,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <div
      className={`fixed left-0 right-0 top-navbar z-40 bg-gray-100 shadow-lg overflow-hidden border-t border-gray-200
        ${isOpen ? "animate-shutter-down" : "h-0"}
      `}
    >
      <div className="flex flex-col items-center">
        {navItems.map((navItem, index) => (
          <div
            key={index}
            className="py-2 border-b border-gray-200 last:border-b-0"
          >
            <Link
              className={
                "text-black text-lg font-semibold hover:text-gray-600 transition-colors w-full text-center"
              }
              href={`#${navItem.anchorReference}`}
              onClick={() => toggleMobileNav()}
            >
              {navItem.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const NavBar = ({ navItems }: NavBarProps) => {
  const isMediumSize = useMediaQuery(`(max-width:${breakpoints.md})`);
  const [isMediumSizeNavOpen, setisMediumSizeNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setisMediumSizeNavOpen(!isMediumSizeNavOpen);
  };

  const navLinks = navItems?.map((navItem, index) => {
    return (
      <Link
        key={index}
        href={`#${navItem.anchorReference}`}
        className={`text-lg font-semibold ${
          isScrolled ? "text-black" : "text-white"
        }`}
      >
        {navItem.title}
      </Link>
    );
  });

  const iconColour =
    isScrolled || (isMediumSize && isMediumSizeNavOpen) ? "black" : "white";

  const navBarColour =
    isScrolled || (isMediumSize && isMediumSizeNavOpen)
      ? "bg-gray-100 "
      : "bg-transparent";

  const HamburgerButton = () => (
    <button
      className={`p-2 rounded-full transition-colors duration-200 ${
        iconColour === "white" ? "hover:bg-white/20" : "hover:bg-gray-200"
      }`}
      onClick={toggleMobileNav}
      aria-label={isMediumSizeNavOpen ? "Close menu" : "Open menu"}
    >
      {isMediumSizeNavOpen ? (
        <LuX className="h-6 w-6" color={iconColour} />
      ) : (
        <LuMenu className="h-6 w-6" color={iconColour} />
      )}
    </button>
  );

  return (
    <nav>
      <div
        className={`gutter-x py-4 fixed top-0 left-0 right-0 z-30 flex items-center ${navBarColour} h-navbar`}
      >
        <div className="flex-shrink-0">
          <Link href="#hero" aria-label="Go to the top">
            {/* text-current and widths and heights make it visible */}
            <OpenBook className="w-[50px] h-[50px] text-current" />
          </Link>
        </div>
        {isMediumSize ? (
          <div className="ml-auto mr-2 flex items-center space-x-2">
            <HamburgerButton />
          </div>
        ) : (
          <div className="flex space-x-9 ml-auto items-center">{navLinks}</div>
        )}
      </div>
      {isMediumSize && isMediumSizeNavOpen && (
        <MobileNavMenu
          navItems={navItems}
          toggleMobileNav={toggleMobileNav}
          isOpen={isMediumSizeNavOpen}
        />
      )}
    </nav>
  );
};

export { NavBar };
