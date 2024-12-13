import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { components } from "./components";
import useThemeContext from "../utils/themeContext";

const themes: any = {
  dark: {
    isDark: true,
    theme: {
      text: "white",
      bg: "black",
    },
  },
  light: {
    isDark: false,
    theme: {
      text: "black",
      bg: "#d5bbff",
    },
  },
};

const RenderAllComponents = ({
  Component,
  id,
  title,
  theme,
}: {
  Component: React.ReactNode;
  id: number;
  title: string;
  theme: any;
}): any => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);

  return (
    <section
      id="main-section"
      className="flex flex-col w-full main-section-light"
    >
      <h3
        className={`${
          title === "profile" ? "hidden" : "block"
        } absolute bottom-5 z-50 left-2 block sm:hidden`}
      >
        # {title}
      </h3>
      <div
        className={`dark:text-white dark:bg-[#191919]  sm:m-[20px]`}
        ref={ref}
      >
        {Component}
      </div>
      <motion.h2
        className="hidden sm:block top-0 z-[1000px] pointer-events-none"
        style={{
          ...{ y },
          fontFamily: "sans-serif",
          fontStyle: "normal",
          letterSpacing: "0.3px",
          fontSize: "18px",
          marginTop: "5px",
        }}
      >
        #&nbsp;{`${title}.`}
      </motion.h2>
    </section>
  );
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const PortpolioMain = () => {
  const { theme, setT } = useThemeContext();

  const themeModeHandler = (themeType: any) => {
    const themeData = themes[themeType];
    setT(themeData);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <button
        id="boltLightning-btn"
        className="fixed text-2xl z-30 right-2 top-0"
        onClick={() => themeModeHandler(theme.isDark ? "light" : "dark")}
      >
        <FaBoltLightning
          className="dark:text-white"
          style={{ textShadow: "10px 10px" }}
        />
      </button>
      {components.map(({ Component, title }, index) => (
        <RenderAllComponents
          Component={Component}
          id={index}
          key={index}
          title={title}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default PortpolioMain;
