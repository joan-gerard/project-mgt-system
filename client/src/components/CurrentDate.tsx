import React from "react";
import { getTodayDate } from "../utils";

const CurrentDate = () => {

  const date = getTodayDate()
  return (
    <div>
      <p className="m-0">{date}</p>
    </div>
  );
};

export default CurrentDate;
