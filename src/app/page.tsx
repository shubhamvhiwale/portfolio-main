"use client";
import React, { useEffect, useRef } from "react";
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
    <section className="flex flex-col w-full">
      <div ref={ref}>{Component}</div>
      <motion.h2 style={{ y }}>{`#${title}.`}</motion.h2>
    </section>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      {components.map(({ Component, title }, index) => (
        <RenderAllComponents
          Component={Component}
          id={index}
          key={index}
          title={title}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
