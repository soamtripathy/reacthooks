import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count +1 );
    }, 2000);
  });
  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}

export default App;
