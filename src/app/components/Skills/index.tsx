import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs } from "./skillsData";
import { CgMenuGridR } from "react-icons/cg";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);
  const [allSkillVisibled, setSkillVisibled] = useState(false);

  const handleWholeArr = () => {
    setSkillVisibled(!allSkillVisibled);
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden p-0 m-0 flex justify-center items-center">
      <div className="skill-container-window w-full h-[100vh]  overflow-hidden flex flex-col">
        <nav className="skill-container-nav bg-#fdfdfd flex justify-center items-center relative overflow-y-hidden overflow-x-auto  md:overflow-hidden">
          <ul className="flex w-full">
            {!allSkillVisibled ? (
              initialTabs.map((item) => (
                <li
                  // style={{ backgroundColor: "#e8dafe" }}
                  key={item.label}
                  className={item === selectedTab ? "text-gray-500" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  <div
                    className={`ml-1 p-1 uppercase font-bold`}
                  >{`${item.label}`}</div>
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className="mr-1 pt-1 fixed right-2 top-12"
            onClick={handleWholeArr}
          >
            <CgMenuGridR />
          </motion.button>
        </nav>
        <main
          // style={{ backgroundColor: "#e8dafe" }}
          className="flex justify-center items-center text-5xl flex-grow skill-main"
        >
          <AnimatePresence mode="wait">
            {!allSkillVisibled ? (
              <motion.div
                className="flex flex-wrap items-start justify-center"
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab
                  ? selectedTab.data.map((item, index) => (
                      <>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-5 rounded-md m-2 icon-container ${selectedTab.iconsProps?.iconCls[index]} cursor-pointer`}
                        >
                          {item}
                        </motion.div>
                        <div className="p-1"></div>
                      </>
                    ))
                  : "😋"}
              </motion.div>
            ) : (
              <motion.div
                className="h-[90vh] w-full flex justify-center"
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap items-center justify-center w-[100%]  md:w-[60%] h-[80vh] pl-2">
                  {initialTabs.map((item, index) => (
                    <>
                      {item.data.map((icon, cls) => (
                        <>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-5 w-[80px] sm:w-[100px] mb-2 h-[80px] sm:h-[100px] rounded-md icon-container flex justify-center items-center ${item.iconsProps.iconCls[cls]} cursor-pointer`}
                          >
                            {icon}
                          </motion.div>
                          <div className="p-1"></div>
                        </>
                      ))}
                    </>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Skills;
