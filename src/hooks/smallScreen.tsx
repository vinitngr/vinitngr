import { useState, useEffect } from "react";

export function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
}
