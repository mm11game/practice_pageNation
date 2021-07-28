import React, { useState } from "react";

const App = () => {
  const [total, setTotal] = useState(10);
  const [number, setNumber] = useState(0);
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
          .map((e) => e + 1)}
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
