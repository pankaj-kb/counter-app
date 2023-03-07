import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [inLimit, setInLimit] = useState("");
  const [deLimit, setDeLimit] = useState("");

  const handleInLimit = (e) => {
    setInLimit(inLimit > deLimit ? e.target.value : 0);
  };

  const handleDeLimit = (e) => {
    setDeLimit(deLimit < inLimit ? e.target.value : -1);
  };

  const handleIncrease = (e) => {
    setCount(count < inLimit ? count + 1 : count);
  };

  const handleDecrese = (e) => {
    setCount(count > deLimit ? count - 1 : count)
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrese}>Decrease Count</button>

      <input
        type="number"
        placeholder="Enter Increase Limit"
        value={inLimit}
        onChange={handleInLimit}
      />
      <input
        type="number"
        placeholder="Enter Decrese Limit"
        value= {deLimit}
        onChange={handleDeLimit}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
