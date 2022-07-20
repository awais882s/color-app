import React from "react";
import { useState } from "react";
function App() {
  const [color, setcColor] = useState("#fff")
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  const getRandomNumbers = () => {
    return Math.floor(Math.random() * hex.length)
  }
  const handleClick = i => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumbers()];
      setcColor(hexColor)

    }



  }
  return (
    <>
      <h1>Color App</h1>
      <button type="button" className="btn btn-primary ms-2" onClick={handleClick}>Color App</button>

    </>
  );
}

export default App;
