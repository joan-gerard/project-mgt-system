import React from "react";

const CurrentDate = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <p className="m-0">{date}</p>
    </div>
  );
};

export default CurrentDate;
