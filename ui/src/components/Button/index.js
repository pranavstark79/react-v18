import { useState } from "react";



const Button = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        let tempCount = count;
        setCount(tempCount + 1);
    }
    return (
        <>
        <button onClick={handleClick}>
            Count- {count}
        </button>
        <br/>
        </>
    );

}

export default Button;