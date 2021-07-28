import React, { useState } from "react";
import ArrayOfPagNum from "./ArrayOfPagNum";

const App = () => {
  const [total, setTotal] = useState(10);
  const [number, setNumber] = useState(0);
  const handleNum = (num) => {
    console.log(num);
  };

  return (
    <div>
      <button
        onClick={() => {
          if (number - 3 < 0) {
            return;
          }
          setNumber((old) => old - 3);
        }}
      >
        {"<"}
      </button>
      <span>
        {[...Array(total).keys()]
          .slice(`${number}`, `${number + 3}`)
          .map((e) => (
            <ArrayOfPagNum key={e} num={e + 1} handleNum={handleNum} />
          ))}
      </span>

      <button
        onClick={() => {
          if (number + 3 > 10) {
            return;
          }
          console.log(number);
          setNumber((old) => old + 3);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default App;
