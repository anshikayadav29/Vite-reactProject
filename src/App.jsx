/*import Login,{Profile,Setting,Userkey} from'./UserComponent'

function App(){
   return(
      <div>
         <h1>Importing and Exporting Component</h1>
         <Login />
         <Profile />
         <Setting />
         <h1>{Userkey}</h1>
      </div>
   )
}

export default App;*/

/*import ToDo from "./ToDo"
function App(){
  return(
    <div>

    <h1>JSX Exercise</h1>
    <ToDo />
    </div>
  )
}
export default App*/



/*

function App() {
  const name = "Anshika yadav"; 
  let x=20;
  let y=40;
  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{name}</h1> 
      <h1>{x+y}</h1> 

    </div>
  );
}

export default App;*/



/*
function App() {
  const name = "Anshika yadav"; 
  let x=20;
  let y=40;
  function fruit(){
    return "Apple"
  }
  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{name}</h1> 
      <h1>{x+y}</h1> 
      {fruit()} //without h1 tag its running but h1 tag is must imp

    </div>
  );
}

export default App;*/



/*function App() {
  const name = "Anshika yadav"; 
  let x=20;
  let y=40;
  function fruit(){
    return "Apple"
  }
  function sum (a,b){
    return a+b
  }
function operation(a,b,op){
  if(op=="+"){
    return a+b;
  }else if(op=="_"){
    return a-b;
  }else{
    return a+b
  }
}
  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{name}</h1> 
      <h1>{x+y}</h1> 
      <h1>{fruit()}</h1>
      <h1>{sum(100,10)}</h1>
      <h1>{operation(20,20,"+")}</h1>

    </div>
  );
}

export default App;*/

/*function App() {
  /*const name = "Anshika yadav"; 
  let x=20;
  let y=40;
  function fruit(){
    return "Apple"
  }
  function sum (a,b){
    return a+b
  }
function operation(a,b,op){
  if(op=="+"){
    return a+b;
  }else if(op=="_"){
    return a-b;
  }else{
    return a+b
  }
}



  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{name?name:"User Not Found"}</h1> 
      <h1>{x+y}</h1> 
      <h1>{fruit()}</h1>
      <h1>{sum(100,10)}</h1>
      <h1>{operation(20,20,"+")}</h1>

    </div>
  );
}

export default App;*/

/*function App(){
  function callFun(){
    alert("function called")
  }
  const fruit =()=>{
    alert("apple")
  }

  return (
    <div>
      <h1>Event and function call</h1>
      <button onClick={fruit}>Click Me</button>
      </div>
  )
}
export default App */
/*import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Banana");
  };

  return (
    <div>
      <h1>State in React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
    </div>
  );
}

export default App;*/

/*import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Banana");
  };

  return (
    <div>
      <h1>State in React JS</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter />
    </div>
  );
}

export default App;*/

/*import { useState } from "react"
function App(){
  const [display,setDisplay]=useState(true)
  return (
    <>
    <h1>Toggle in React js </h1>
    {
      display? <h1>Anshika Yadav</h1>:<h1>no user name</h1>
    }
    </>
  )
}
export default App*/
/*import { useState } from "react"

function App() {
  const [display, setDisplay] = useState(true)

  return (
    <>
      <h1>Toggle in React js </h1>
      {
        display ? <h1>Anshika Yadav</h1> : null
      }
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </>
  )
}

export default App*/
//count

/*import { useState } from "react"
function App(){
  const [count,setCount]=useState(1);
  return(
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)} >Counter</button>
    {
      count==0?<h1>Condition 1</h1>:null
    }
    </div>
  )
}
export default App*/
/*import { useState } from "react"
function App(){
  const [count,setCount]=useState(3);
  return(
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)} >Counter</button>
    {
      count==0?<h1>Condition 0</h1>
      :count==1?<h1>Condition 1</h1>
      :count==2?<h1>Condition 2</h1>
      :count==3?<h1>Condition 3</h1>
      :count==4?<h1>Condition 4</h1>
      :null  
    }
    </div>
  )
}
export default Appimport User from "./User"*/

function App() {
  return (
    <div>
      <h1>Props in React js</h1>
      <User name="Anshika Yadav" age={29} email="anshika@test.com" />
    </div>
  )
}

export default App
