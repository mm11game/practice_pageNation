import React from "react";

const ArrayOfPagNum = ({ handleNum, num }) => {
  return <div onClick={() => handleNum(num)}>{num}</div>;
};

export default ArrayOfPagNum;
