import React, { useRef, useState } from "react";
import CountUp from "../CountUp/index";
import TypingAnimation from "../TypeAnimation/index";

interface ExperienceContentProps {
  number: number;
  joinDate: {
    day: number;
    month: number;
    year: number;
  };
  closeDate: {
    day: number;
    month: number;
    year: number;
  };
  designation: string;
  organizationName: string;
  experience: string[];
  designationfS: number | undefined;
  orgnizationfS: number | undefined;
  letterSpacing: number | undefined;
}

const WorkExpContent = ({
  joinDate,
  closeDate,
  designation,
  organizationName,
  experience,
  number,
  designationfS,
  orgnizationfS,
  letterSpacing,
}: ExperienceContentProps) => {
  const [showCount, setShowCount] = useState<boolean>(true);
  return (
    <div className=" flex justify-center items-center w-full h-[100vh]">
      <div className="w-[880px] md:pt-8 md:p-10">
        <div className="flex justify-between px-3">
          <div className="font-bold">Work Experience</div>
          {showCount && (
            <div className="flex">
              <CountUp
                start={0}
                end={joinDate.day}
                duration={3.75}
                decimal=""
                separator=""
              />
              /
              <CountUp
                start={0}
                end={joinDate.month}
                duration={2.75}
                decimal=""
                separator=""
              />
              /
              <CountUp
                start={0}
                end={joinDate.year}
                duration={5.75}
                decimal=""
                separator=""
              />
              &nbsp;
              {closeDate.day === 0 ? (
                "to Till"
              ) : (
                <>
                  to&nbsp;
                  <CountUp
                    start={0}
                    end={closeDate.day}
                    duration={3.75}
                    decimal=""
                    separator=""
                  />
                  /
                  <CountUp
                    start={0}
                    end={closeDate.month}
                    duration={2.75}
                    decimal=""
                    separator=""
                  />
                  /
                  <CountUp
                    start={0}
                    end={closeDate.year}
                    duration={5.75}
                    decimal=""
                    separator=""
                  />
                </>
              )}
            </div>
          )}
        </div>
        <div
          style={{
            fontSize: `${designationfS}em`,
            letterSpacing: `${letterSpacing}px`,
          }}
          className={`w-full text-center font-bold font-jostnormal`}
        >
          {designation}
        </div>
        <div
          style={{ fontSize: `${orgnizationfS}px` }}
          className={`tracking-[.19em] px-3 text-center`}
        >
          {organizationName}
        </div>
        <div className="px-3 text-[12px] text-center md:text-left">
          <TypingAnimation
            endOfAnimation={() => console.log("Ended animation!")}
            lines={experience}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExpContent;
