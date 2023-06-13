import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    // let tempCount = count;
    setCount(count +1)
  }

  const decrement = () => {
    // let tmepCount = count;
    setCount(count - 1)
  }

  return (
    <div className="App">
      <> 
      <div>Counter: {count} </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </>
    </div>
  );
}

export default App;
