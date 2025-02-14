import React, { useEffect, useState } from "react";

const HandleElementTopTouch = (elementRef: any) => {
  const [isDivTouchedToTop, setIsDivTouchedToTop] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top <= 50) {
          setIsDivTouchedToTop(true);
        } else {
          setIsDivTouchedToTop(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);
  return {
    isDivTouchedToTop,
  };
};

export default HandleElementTopTouch;
