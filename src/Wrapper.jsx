/*function Wrapper() {
  return (
    <div style={{ color: "green", border: "5px solid green", width: "200px" }}>
      <h1>Hello Everyone</h1>
    </div>
  )
}

export default Wrapper;*/
/*function Wrapper({ color = "green", children }) {
  return (
    <div style={{ color: color, border: `5px solid ${color}`, width: "250px", margin: "10px", padding: "10px" }}>
      {children}
    </div>
  )
}

export default Wrapper
//props end*/

import { useState } from "react";

function App() {
  // useState hook → initial value is "Anil Sidhu"
  const [val, setVal] = useState("Anil Sidhu");

  return (
    <div>
      <h1>Get Input Field Value</h1>

      {/* Input field with onChange event */}
      <input 
        type="text" 
        onChange={(event) => setVal(event.target.value)} 
        placeholder="Enter Username" 
      />

      {/* Display the input value */}
      <h1>{val}</h1>
    </div>
  );
}

export default App;




