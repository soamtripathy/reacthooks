import { useState } from "react";

function App() {
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Blue");
  };
  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

export default App;
