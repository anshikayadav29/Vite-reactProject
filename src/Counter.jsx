// import { useState } from "react";

// const Counter = () => {
//   const [count, setCounter] = useState(0);
//   const [r, setR] = useState(10);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <h2>r Counter: {r}</h2>
//       <button onClick={() => setCounter(count + 1)}>Update Counter</button>
//       <button onClick={() => setR(r - 1)}>Update r Counter</button>
//     </div>
//   );
// };

// export default Counter;

/*import React, { useEffect } from "react";

function Counter({ count, data }) {
  const handleCounter = () => {
    console.log("handleCounter called");
  };

  const handleData = () => {
    console.log("handleData called");
  };

  // sirf component mount hone par chalega
  useEffect(() => {
    handleCounter();
  }, []);

  // jab bhi count ya data change hoga ye chalega
  useEffect(() => {
    handleData();
  }, [count, data]);

  return null; // yaha kuch render karane ki zarurat nahi thi
}

export default Counter;*/




import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  // Mounting phase (runs only once)
  useEffect(() => {
    console.log("mounting phase only");
  }, []);

  // Updating phase (runs whenever count or data changes)
  useEffect(() => {
    console.log("update phase only");
  }, [count, data]);

  // Unmounting phase (runs when component is removed)
  useEffect(() => {
    return () => {
      console.log("unmount phase only");
    };
  }, []);

  return (
    <div>
      <h1>Counter Value {count}</h1>
      <h1>Data Value {data}</h1>

      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
      <button onClick={() => window.location.reload()}>Toggle</button>
    </div>
  );
};

export default Counter;
