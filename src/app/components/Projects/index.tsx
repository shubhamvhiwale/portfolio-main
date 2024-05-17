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

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const Projects = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [hobbyIndex, setHobbyIndex] = useState(0);
  const imageIndex = wrap(0, projectData.length, page);

  const paginate = (pageIndex: number) => {
    const newDirection = pageIndex > page ? 1 : -1;
    setPage([pageIndex, newDirection]);
  };

  return (
    <div className="project-container flex flex-col">
      <div
        style={{ boxShadow: "2px 2px 40px 2px", zIndex: 100 }}
        className="sm:w-1/2 w-full flex justify-center items-center  sm:p-2"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="h-[30rem] sm:h-[24rem] p-2 bg-[#e8dafe] min-w-[20rem]  sm:min-w-[30rem] w-[30rem]"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.4,
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.7 },
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
                  className="flex justify-between"
                  key={`projectData-${index}`}
                >
                  <div className="p-2 uppercase font-semibold sm:w-[22%]">
                    {key}
                  </div>
                  <div className="p-2 text-[14px] text-end sm:w-full">
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
      </div>
      <div className="sm:w-1/2 w-full h-full  flex justify-center items-center text-xl bg-[#d3bafc]">
        <ul style={{ listStyle: "inside" }}>
          {projectData.map(({ name }, index) => (
            <li key={`project-title-${index}`} className="mt-1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className={hobbyIndex !== index ? "text-gray-600" : ""}
                onClick={() => {
                  paginate(index);
                  setHobbyIndex(index);
                }}
              >
                {name}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
