"use client";
import React from "react";
import ReactCountUp from "react-countup";

// components configs
export interface Props {
  start: number;
  end: number;
  duration?: number;
  decimals?: number;
  decimal?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
  handleOnStart?: () => void;
  handleOnEnd?: () => void;
}

const CountUp: React.FC<Props> = ({
  start,
  end,
  decimals,
  duration,
  decimal,
  prefix,
  suffix,
  separator,
  handleOnEnd,
  handleOnStart,
}) => {
  return (
    <ReactCountUp
      start={start}
      end={end}
      duration={duration}
      separator={separator}
      decimals={decimals}
      decimal={decimal}
      prefix={prefix}
      suffix={suffix}
      onEnd={handleOnEnd}
      onStart={handleOnStart}
    >
      {({ countUpRef, start }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </ReactCountUp>
  );
};

export default CountUp;
