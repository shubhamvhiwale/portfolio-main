import React, { useState } from "react";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "./projectData";
import "./index.css";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Projects = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, projectData.length, page);

  const paginate = (pageIndex: number) => {
    const newDirection = pageIndex > page ? 1 : -1;
    setPage([pageIndex, newDirection]);
  };

  return (
    <div className="project-container flex flex-col w-full sm:flex-row relative bg-[#e8dafe]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="caresoul-container h-[33rem] sm:h-auto  shadow-2xl mt-3 sm:mt-auto  bg-[#dec9ff]  sm:shadow-none top-0 sm:top-auto sm:pl-10 sm:bg-[#e8dafe] min-w-[20rem] w-full p-2 sm:border-none  border border-b-gray-900"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {Object.keys(projectData[imageIndex]).map(
            (key: string, index: number) => (
              <div
                className="flex justify-between sm:w-[60%]"
                key={`projectData-${index}`}
              >
                <div className="font-bold uppercase">{key}</div>
                <div className="p-2 text-[14px] text-end">
                  {Array.isArray(projectData[imageIndex][key])
                    ? projectData[imageIndex][key].map((link: string) => (
                        <>
                          <a
                            className="text-blue-800"
                            target="__blank"
                            href={link}
                          >
                            {link}
                          </a>
                          <br />
                        </>
                      ))
                    : projectData[imageIndex][key]}
                </div>
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>
      <div className="text-white text-2xl z-20 w-full h-full flex justify-center sm:justify-end items-end pb-20 sm:pb-0 sm:items-center sm:mr-14">
        <ol className="list-disc">
          {projectData.map(({ name }, index) => (
            <li key={index}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className={"text-gray-600"}
                onClick={() => {
                  paginate(index);
                }}
              >
                {name}
              </motion.button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Projects;
