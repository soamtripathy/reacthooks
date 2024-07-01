import { useState } from "react";

function App() {
  // const [car, setCar] = useState({
  //   brand: "Ferrari",
  //   model: "Model",
  //   year: "2024",
  //   color: "red",
  // });
  // const changeColor = () => {
  //   setCar((prev) => {
  //     return { ...prev, color: "blue" };
  //   });
  // };

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    // setCount(count+1) //increase by 1
    setCount((prev) => prev + 1); //1
    setCount((prev) => prev + 1); //2
    setCount((prev) => prev + 1); //3
    setCount((prev) => prev + 1); //4
  };
  return (
    <>
      {/* <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={changeColor}>Blue</button> */}
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </>
  );
}

export default App;
