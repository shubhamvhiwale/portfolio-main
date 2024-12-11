import React, { useEffect, useState } from "react";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "./projectData";
import "./index.css";
import useWindowSize from "../../utils/windowSizer";

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
  console.log("page : ", page);

  const { width, height } = useWindowSize();
  console.log("page-height : ", height, height / 2);
  const [isTheme, setIsTheme] = useState(false);

  const imageIndex = wrap(0, projectData.length, page);

  const paginate = (pageIndex: number) => {
    const newDirection = pageIndex > page ? 1 : -1;
    setPage([pageIndex, newDirection]);
  };

  useEffect(() => {
    setIsTheme(Boolean(window?.localStorage?.getItem("isTheme")));
  }, []);

  return (
    <div
      style={{ padding: "20px" }}
      className="project-container flex flex-col w-full sm:flex-row sm:border-2 relative"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          style={{
            zIndex: 500,
            overflow: "auto",
          }}
          key={page}
          id="project-details-view-container"
          className={`lg:left-20 rounded-lg project-details-view-container ${
            isTheme ? "bg-[gray]" : "bg-[#d5bbff]"
          } caresoul-container sm:pt-10 h-[50%] lg:h-auto shadow-2xl lg:mt-auto lg:shadow-none top-2 lg:top-auto lg:pl-10 w-[95%] min-w-[20rem] lg:w-[50%] p-2`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          // drag="x"
          // dragConstraints={{ left: 0, right: 0 }}
          // dragElastic={1}
          // onDragEnd={(e, { offset, velocity }) => {
          //   const swipe = swipePower(offset.x, velocity.x);
          //   if (swipe < -swipeConfidenceThreshold) {
          //     paginate(1);
          //   } else if (swipe > swipeConfidenceThreshold) {
          //     paginate(-1);
          //   }
          // }}
        >
          {Object.keys(projectData[imageIndex]).map(
            (key: string, index: number) => (
              <div
                className="flex justify-between w-full"
                key={`projectData-${index}`}
              >
                <div className="font-bold uppercase p-2">{key}</div>
                <div
                  style={{
                    height: key === "description" ? "140px" : "",
                    // overflow: key === "description" ? "auto" : "",
                  }}
                  className="p-2 text-[14px] text-end"
                >
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
      <div
        style={{ zIndex: 0 }}
        className="text-white text-sm sm:text-2xl z-20 mt-20 pb-10 sm:pb-20 lg:mt-0 w-full h-full flex justify-center lg:justify-end items-end lg:pb-0 lg:items-center"
      >
        <ol className="list-disc ml-8  lg:mr-20 uppercase marker:text-black">
          {projectData.map(({ name }, index) => (
            <li
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration={index * 10}
              key={index}
              className="uppercase text-white"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className={
                  page === index ? `text-white` : `text-gray-600 uppercase`
                }
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
