import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

interface itemsListProps {
  title: string;
}
interface SliderProps {
  videos: string[];
  itemsList: itemsListProps[];
}

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
const Slider = ({ videos, itemsList }: SliderProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [hobbyIndex, setHobbyIndex] = useState(0);
  const imageIndex = wrap(0, videos.length, page);

  const paginate = (pageIndex: number) => {
    const newDirection = pageIndex > page ? 1 : -1;
    setPage([pageIndex, newDirection]);
  };
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        {videos[imageIndex] ? (
          <motion.video
            key={page}
            autoPlay
            muted
            width={"100%"}
            className="object-cover h-[100vh]"
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
            <source src={videos[imageIndex]}></source>
          </motion.video>
        ) : (
          <div className="w-full h-[100vh] flex justify-center items-center opacity-50 text-gray-700 uppercase text-2xl">
            <h5>No content available</h5>
          </div>
        )}
      </AnimatePresence>
      <div className="prev text-white text-5xl">
        <ol className="w-full">
          {itemsList.map(({ title }, index) => (
            <li key={index}>
              {hobbyIndex === index && "I like"}{" "}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className={hobbyIndex !== index ? "text-gray-600" : ""}
                onClick={() => {
                  paginate(index);
                  setHobbyIndex(index);
                }}
              >
                {title}
              </motion.button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Slider;
