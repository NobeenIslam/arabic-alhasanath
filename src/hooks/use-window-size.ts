import { useEffect, useState } from "react";
import { breakpoints } from "@/utilities/breakpoints";

export const useWindowSize = () => {
  const [isMediumSize, setIsMediumSize] = useState(false);
  const MEDIUM_BREAKPOINT = parseInt(breakpoints.md);

  useEffect(() => {
    const checkSize = () => {
      setIsMediumSize(window.innerWidth < MEDIUM_BREAKPOINT);
    };

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMediumSize;
};
