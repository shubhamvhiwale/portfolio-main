import React, { useState } from "react";

const DevMeven = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full md:w-[64%]">
        <div className="flex justify-between px-3 flex-col sm:flex-row">
          <div className="font-bold text-3xl">DevMaven</div>
          <div className="text-[18.2px] tracking-[4.4px]">
            3+ YEARS EXPERIENCED AS A
          </div>
        </div>
        <div className="w-full text-center text-[4em] sm:text-[5em]  md:text-[8em] font-bold font-jostnormal">
          JAVASCRIPT
        </div>
        <div className="tracking-[.20em] text-[48px] sm:text-[55px] md:text-[45px] md:text-center px-3">
          FULL STACK DEVELOPER
        </div>
        <div className="px-3 mt-5 md:text-[12px] text-right">
          A seasoned senior software developer with a proven track record of
          delivering high-quality software solutions. In my role as a team lead,
          I excel in guiding and inspiring my team to achieve their best
          potential.
        </div>
      </div>
    </div>
  );
};

export default DevMeven;
