import React from "react";
import Typography from ".";
import { TextSize, TextWeight } from "./enums";

const Label = ({ children = "label" }: { children?: string }) => {
  return (
    <Typography
      mb="0.6"
      lh="2"
      size={TextSize.sm}
      weight={TextWeight.medium}
      color="#CFCECE"
    >
      {children}
    </Typography>
  );
};

export default Label;
