import { useState } from "react";

const CommonButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    let tempCount = count;
    setCount(tempCount + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Button1 - {count}</button>
      <br/>
      <button onClick={handleClick}>Button2 - {count}</button>
    </>
  );
};

export default CommonButton;
