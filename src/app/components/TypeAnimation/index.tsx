import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  lines: string[];
  endOfAnimation: () => void;
}
const TypingAnimation: React.FC<Props> = ({ lines, endOfAnimation }) => {
  return (
    <TypeAnimation
      sequence={[`${lines.map((line) => line)}`, () => endOfAnimation()]}
      speed={50}
      repeat={0}
      omitDeletionAnimation={true}
    />
  );
};

export default TypingAnimation;
