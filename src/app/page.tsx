"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { components } from "@/app/components/index";
import { Provider } from "react-redux";
import store from "@/app/lib/redux/store";
import { FaBoltLightning } from "react-icons/fa6";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const RenderAllComponents = ({
  Component,
  id,
  title,
}: {
  Component: React.ReactNode;
  id: number;
  title: string;
}): any => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  return (
    <section
      id="main-section"
      className="flex flex-col w-full main-section-light"
    >
      <div className="sm:m-[20px]" ref={ref}>
        {Component}
      </div>
      <motion.h2
        className="hidden sm:block"
        style={{ y }}
      >{`#${title}.`}</motion.h2>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleThemeChange = (theme: boolean) => {
    const mainSections = document.querySelectorAll("section");
    const projectViewContainer = document.getElementById(
      "project-details-view-container"
    );
    const boltLightningBtn = document.getElementById("boltLightning-btn");
    if (isDarkTheme) {
      // section theme changed
      mainSections.forEach((section) => {
        section.classList.add("main-section-light");
        section.classList.remove("main-section-dark");
      });
      // projectViewContainer theme changed
      projectViewContainer?.classList.add("bg-[#d5bbff]");
      projectViewContainer?.classList.remove("bg-[gray]");
      // boltLightningBtn theme changed
      boltLightningBtn?.classList.add("text-black");
      boltLightningBtn?.classList.remove("text-[#e1d633]");
    } else {
      mainSections.forEach((section) => {
        section.classList.remove("main-section-light");
        section.classList.add("main-section-dark");
      });
      // projectViewContainer theme changed
      projectViewContainer?.classList.remove("bg-[#d5bbff]");
      projectViewContainer?.classList.add("bg-[gray]");
      // boltLightningBtn theme changed
      boltLightningBtn?.classList.remove("text-black");
      boltLightningBtn?.classList.add("text-[#e1d633]");
    }
    setIsDarkTheme(!isDarkTheme);
    const isTheme = !isDarkTheme;
    window.localStorage.setItem("isTheme", isTheme.toString());
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      handleThemeChange(true);
    } else {
      handleThemeChange(false);
    }
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <button
        id="boltLightning-btn"
        className="fixed text-2xl z-30 right-2 top-0"
        onClick={() => handleThemeChange(isDarkTheme)}
      >
        <FaBoltLightning style={{ textShadow: "10px 10px" }} />
      </button>
      <Provider store={store}>
        {components.map(({ Component, title }, index) => (
          <RenderAllComponents
            Component={Component}
            id={index}
            key={index}
            title={title}
          />
        ))}
      </Provider>
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
