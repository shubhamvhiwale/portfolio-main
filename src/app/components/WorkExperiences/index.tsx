import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import CountUp from "../CountUp/index";
import TypingAnimation from "../TypeAnimation/index";
import { experience } from "../../data/experience";
import handleElementTopTouch from "@/app/helpers/handleElementTopTouch";

interface ExperienceContentProps {
  number: number;
  joinDate: {
    day: number;
    month: number;
    year: number;
  };
  designation: string;
  organizationName: string;
  experience: string[];
  designationfS: number | undefined;
  orgnizationfS: number | undefined;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ExperienceContent({
  joinDate,
  designation,
  organizationName,
  experience,
  number,
  designationfS,
  orgnizationfS,
}: ExperienceContentProps) {
  const [showCount, setShowCount] = useState<boolean>(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div
        ref={ref}
        style={{
          width: "600px",
          // boxShadow:
          //   "rgba(0, 0, 0, 0.1) -6px -97px 124px 6px, rgba(0, 0, 0, 0.05) 0px 4px 6px -1px",
          overflowY: "auto",
        }}
        // className="bg-[#E8DAFE]"
      >
        <div className="w-100 pt-8 pr-2 pl-2">
          <div className="flex justify-between px-3">
            <div className="font-bold">Work Experience</div>
            {showCount && (
              <div className="flex">
                {/* <CountUp
                  start={-170}
                  end={joinDate.day}
                  duration={3.75}
                  decimal=""
                  separator=""
                />
                &nbsp;/&nbsp;
                <CountUp
                  start={-100}
                  end={joinDate.month}
                  duration={2.75}
                  decimal=""
                  separator=""
                />
                &nbsp;/&nbsp;
                <CountUp
                  start={-2023}
                  end={joinDate.year}
                  duration={5.75}
                  decimal=""
                  separator=""
                /> */}
                {joinDate.day}/{joinDate.month}/{joinDate.year}
                &nbsp;to Till
              </div>
            )}
          </div>
          <div
            style={{ fontSize: `${designationfS}em` }}
            className={`w-full text-center font-bold font-jostnormal`}
          >
            {designation}
          </div>
          <div
            style={{ fontSize: `${orgnizationfS}px` }}
            className={`tracking-[.19em] px-3`}
          >
            {organizationName}
          </div>
          <div className="px-3 text-[12px] ">
            <TypingAnimation
              endOfAnimation={() => console.log("Ended animation!")}
              lines={experience}
            />
          </div>
        </div>
      </div>
      <motion.h2 style={{ y }}>{`#00${number}`}</motion.h2>
    </section>
  );
}

const WorkExperiences = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const { isDivTouchedToTop } = handleElementTopTouch(introductionRef);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {experience?.map((item, index) => (
        <ExperienceContent
          key={`expkey-${index}`}
          joinDate={item.joinData}
          designation={item.designation}
          organizationName={item.organizationName}
          experience={item.experience}
          number={item.number}
          designationfS={item.designationfS}
          orgnizationfS={item.orgnizationfS}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

export default WorkExperiences;
