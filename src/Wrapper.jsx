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

/*import { useState } from "react";

function App() {
  // useState hook → initial value is "Anil Sidhu"
  const [val, setVal] = useState("Anil Sidhu");

  return (
    <div>
      <h1>Get Input Field Value</h1>

      
      <input 
        type="text" 
        onChange={(event) => setVal(event.target.value)} 
        placeholder="Enter Username" 
      />

      
      <h1>{val}</h1>
    </div>
  );
}

export default App;*/
import { useState } from "react";

function App(){
  const [name,setName]=useState('anil');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  return (
  <div>
    <h1>Controller Component</h1>
    <form action="" method="get">
      <input 
        type="text" 
        onChange={(event)=>setName(event.target.value)} 
        placeholder="Enter Name" 
        value={name}
      />
      <br /><br />
      <input 
        type="password" 
        placeholder="Enter password" 
        onChange={(event)=>setPassword(event.target.value)}
        value={password}
      />
      <br /><br />
      <input 
        type="text" 
        placeholder="Enter email" 
        onChange={(event)=>setEmail(event.target.value)}
        value={email}
      />
      <button>Submit</button>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </form>
  </div>
  )
}

export default App;





