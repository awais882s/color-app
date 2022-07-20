import React, { useState } from "react";
import { Helmet } from "react-helmet";
export default function App() {
  const [color, setColor] = useState("#fff");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };
  const handleClick = i => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
      setColor(hexColor);
      window.document.body.style.backgroundColor = color;
    }
  };



  return (
    <>

      <div className="text-center">
        <button onClick={handleClick} value="Click Me" >Click Me</button>
      </div>
    </>
  );
}
