import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {

    console.log(`before seState: ${count}`);

    setCount(count + 1);
    
    console.log(`after seState: ${count}`);
  }

  // return <div onClick={increment}>{count}</div>;
  return <button onClick={increment}>{count}</button>;

}

export default Counter;
