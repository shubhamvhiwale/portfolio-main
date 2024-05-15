import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDeleteOutline } from "react-icons/ti";

const Education = () => {
  const [selectedId, setSelectedId] = useState("");
  const items = [
    {
      id: "1",
      title: "MIT COLLAGE AURANGABAD",
      subtitle: "Bsc Comp. Sci.",
      duration: "JAN 2018 - MARCH 2021",
      description:
        "I completed my Bachelor of Science in Computer Science from MIT College, Aurangabad, between January 2018 and March 2021, graduating with a commendable 79.01%. My time at MIT equipped me with a solid understanding of computer science principles, preparing me for future endeavors in the field.",
    },
    {
      id: "2",
      title: "Dr. B. R. AMBEDKAR COLLAGE LONAR",
      subtitle: "HSC (12th)",
      duration: "JUNE 2016 - MAY 2017",
      description:
        "I completed my 12th grade with a focus on the science stream at Dr. B.R. Ambedkar College, Lonar, between June 2016 and May 2017, achieving a solid 64%. This educational experience laid the foundation for my academic journey, providing me with essential knowledge and skills for my future studies.",
    },
    {
      id: "3",
      title: "SHRI SHIVAJI HIGH SCHOOL MEHKAR",
      subtitle: "SSC (10th)",
      duration: "JAN 2015 - MARCH 2016",
      description:
        "I completed my 10th grade with a science stream at Shri Shivaji High School, Mehkar, from January 2015 to March 2016, securing a respectable 54%. This educational milestone marked an important step in my academic journey, fostering my passion for science and setting the stage for further learning and growth.",
    },
  ];
  return (
    <div className="w-full h-[100vh]">
      <motion.div className="bg-#e8dafe flex items-center justify-center h-screen">
        {/* className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 */}
        <div className="flex flex-wrap items-center justify-center">
          {items.map((item) => (
            <motion.div
              className={`card m-2 bg-gray-200 rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                selectedId === item.id ? "card-selected" : ""
              }`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
              transition={{ duration: 0.3 }}
            >
              <div className="card-content w-[300px] h-[200px] p-5 flex text-center justify-center items-center">
                <motion.h5 className="text-3xl font-bold mb-1 text-gray-700">
                  {item.subtitle}
                </motion.h5>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {items.map(
                (item) =>
                  item.id === selectedId && (
                    <motion.div
                      className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto h-[300px]"
                      layoutId={`card-container-${item.id}`}
                      key={item.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <motion.div className="relative">
                        <motion.button
                          className="absolute top-2 right-2 py-1 px-2 text-center rounded-full"
                          onClick={() => setSelectedId("")}
                        >
                          <TiDeleteOutline />
                        </motion.button>
                        <motion.h5 className="text-lg font-bold mb-1 text-gray-700">
                          {item.title}
                        </motion.h5>
                        <motion.p
                          className="text-md text-gray-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {item.duration}
                        </motion.p>
                        <motion.p className="text-sm mb-4 mt-5">
                          {item.description}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Education;
