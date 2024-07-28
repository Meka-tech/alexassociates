import React from "react";

const DateConvert = (date: Date | null) => {
  return date?.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

export default DateConvert;
