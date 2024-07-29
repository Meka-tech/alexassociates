import React from "react";

const DateConvert = (date: Date | null) => {
  const mongoDate = new Date(`${date}`);
  return mongoDate?.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};

export default DateConvert;
