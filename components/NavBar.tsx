"use client";

import { LuMenu, LuX } from "react-icons/lu";
import OpenBook from "@/public/open-book.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";

export type NavItem = {
  title: string;
  anchorReference: string;
  subtitle?: string;
};

export interface NavBarProps {
  navItems: NavItem[];
}

const NavBar = ({ navItems }: NavBarProps) => {
  const isMediumSize = useWindowSize();
  const [isNavMenuOpen, setisNavMenuOpen] = useState(false);
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

  const toggleNavMenu = () => {
    setisNavMenuOpen(!isNavMenuOpen);
  };

  const iconColour =
    isScrolled || (isMediumSize && isNavMenuOpen) ? "black" : "white";

  const navBarColour =
    isScrolled || (isMediumSize && isNavMenuOpen)
      ? "bg-gray-100 opacity-90 backdrop-blur-md shadow-md"
      : "bg-transparent";

  const NavMenuButton = () => (
    <button
      className={cn(
        "p-2 rounded-full transition-colors duration-200",
        iconColour === "white" ? "hover:bg-white/20" : "hover:bg-gray-200"
      )}
      onClick={toggleNavMenu}
      aria-label={isNavMenuOpen ? "Close menu" : "Open menu"}
    >
      {isNavMenuOpen ? (
        <LuX className="h-6 w-6" color={iconColour} />
      ) : (
        <LuMenu className="h-6 w-6" color={iconColour} />
      )}
    </button>
  );

  const navContent = navItems.map((navItem, index) => (
    <div key={index} className={cn(isMediumSize && "py-2 first:pt-4")}>
      <Link
        href={`#${navItem.anchorReference}`}
        className={cn(
          "text-lg font-semibold transition-colors duration-300",
          `text-${iconColour}`,
          "focus:outline-none focus:ring-2 focus:ring-blue-500"
        )}
        onClick={() => isMediumSize && toggleNavMenu()}
      >
        {navItem.title}
      </Link>
      {isMediumSize && navItem.subtitle && (
        <p className="text-sm text-gray-600 mt-1">{navItem.subtitle}</p>
      )}
    </div>
  ));

  return (
    <nav>
      <div
        className={cn(
          "gutter-x fixed top-4 left-4 right-4 z-30 rounded-3xl py-2",
          navBarColour,
          "transition-all duration-300"
        )}
      >
        <div
          className={cn(
            "grid grid-cols-[auto_1fr_auto] items-center",
            isMediumSize && isNavMenuOpen && "grid-rows-[auto_auto]",
            "transition-all duration-300"
          )}
        >
          <div className="flex-shrink-0">
            <Link href="#hero" aria-label="Go to the top">
              <OpenBook className={cn("w-[50px] h-[50px]", iconColour)} />
            </Link>
          </div>

          {isMediumSize ? (
            <div className="justify-self-end">
              <NavMenuButton aria-label="Toggle navigation menu" />
            </div>
          ) : (
            <div className="flex justify-self-end space-x-8">{navContent}</div>
          )}

          {isMediumSize && (
            <div
              className={cn(
                "col-span-3 overflow-hidden transition-all duration-300",
                isNavMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {navContent}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
