import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip, PlacesType, VariantType } from "react-tooltip";

interface TooltipProps {
  id: string;
  place?: PlacesType;
  variant?: VariantType;
  content: string;
}

const ReactTooltip = ({ id, place, variant, content }: TooltipProps) => {
  return (
    <Tooltip
      id={id}
      place={place}
      variant={variant}
      content={content}
      delayShow={10}
      style={{ fontSize: "8px" }}
    />
  );
};

export default ReactTooltip;
