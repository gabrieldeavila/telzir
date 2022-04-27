import { useCallback, useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  // if the window is less than 768px, therefore isMobile is true
  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    // check when the component is mounted
    handleResize();

    // check when the window is resized
    window.addEventListener("resize", handleResize);

    return () => {
      // remove the event listener when the component is unmounted
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
