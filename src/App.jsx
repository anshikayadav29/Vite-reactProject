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

/*function App() {
  return (
    <div>
      <h1>Props in React js</h1>
      <User name="Anshika Yadav" age={29} email="anshika@test.com" />
    </div>
  )
}

export default App
*/




/*import User from "./User"

function App() {
  let userName="Anil Yadav";
  let age=50;
  let email="anil@test.com"
  return (
    <div>
      <h1>Props in React js</h1>
      <User name={userName} age={age} email={email}
      />
    </div>
  )
}

export default App*/

/*import User from "./User"

function App() {
  let userObject = {
    name: "Anil Yadav",
    age: "29",
    email: "anil@test.com"
  }

  let userObject2 = {
    name: "Peter",
    age: "20",
    email: "peter@test.com"
  }

  return (
    <div>
      <h1>Props in React JS</h1>
      <User user={userObject} />
      <User user={userObject2} />
    </div>
  )
}

export default App;*/
/*import User from "./User"

function App() {
  let userObject = {
    name: "Anil Yadav",
    age: "29",
    email: "anil@test.com"
  }

  let userObject2 = {
    name: "Peter",
    age: "20",
    email: "peter@test.com"
  }

  return (
    <div>
      <h1>Props in React JS</h1>
      <User user={userObject} />
      <User user={userObject2} />
      <College />
    </div>
  )
}

function College() {
  return (
    <div>
      <h1>College</h1>
    </div>
  )
}

export default App;   */
/*import User from "./User"
import Wrapper from "./Wrapper"

function App() {
  return (
    <div>
      <h1>Props in React js</h1>
      <Wrapper />
      {/* 
      <User name="Anshika Yadav" />
      <User name="Sam" /> 
      }
    </div>
  )
}

export default App;*/
/*import User from "./User"
import Wrapper from "./Wrapper"

function App() {
  return (
    <div>
      <h1>Props in React JS</h1>

      {/* Wrapper with custom color and children }
      <Wrapper color="orange">
        <h1>Hello Everyone</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Anil</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Admin</h1>
        <h2 style={{ color: "red" }}>Please login</h2>
      </Wrapper>

    
      
      { <User name="Sam" /> }
    </div>
  )
}

export default App*/
//Handle checkbox in React

/*import Skills from './Skills';

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Skills />
    </div>
  );
}

export default App;*/
/*import { useState } from "react";
import "./App.css";

function App() {
  const [gender, setGender] = useState("male"); // default gender
  const [city, setCity] = useState("delhi");   // default city

  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>

      <h4>Select Gender</h4>
      <label htmlFor="male">
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          name="gender"
          value="male"
          checked={gender === "male"}
          id="male"
        />
        Male
      </label>

      <label htmlFor="female">
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          name="gender"
          value="female"
          checked={gender === "female"}
          id="female"
        />
        Female
      </label>

      <h2>Selected Gender: {gender}</h2>

      <br />
      <h4>Select City</h4>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue="delhi"
      >
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>

      <h2>Selected City: {city}</h2>
    </div>
  );
}

export default App;*/



/*function App() {
  const usernameData = [
    { names: "Anil", age: "29", email: "anil@test.com", id: 1 },
    { names: "Prince", age: "29", email: "prince@test.com", id: 2 },
    { names: "Ram", age: "24", email: "ram@test.com", id: 3 },
    { names: "Abhay", age: "20", email: "abhay@test.com", id: 4 },
  ];

  return (
    <div>
      <h1>Loop in JSX Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>

        <tbody>
          {usernameData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.names}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;*/
/*function App() {
  const usernames = ["anil", "sam", "peter", "bruce"];

  const usernameData = [
    { names: "Anil", age: "29", email: "anil@test.com", id: 1 },
    { names: "Prince", age: "29", email: "prince@test.com", id: 2 },
    { names: "Ram", age: "24", email: "ram@test.com", id: 3 },
    { names: "Abhay", age: "20", email: "abhay@test.com", id: 4 },
  ];

  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>

      
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {usernameData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.names}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Dummy Data</h2>

      //second table
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {usernames.map((name, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{name}@test.com</td>
              <td>{20 + index * 5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;*/

/*import User from "./User";

function App() {
  const users = [
    { name: "anil", age: 29, email: "anil@test.com" },
    { name: "sam", age: 34, email: "sam@test.com" },
    { name: "peter", age: 20, email: "peter@test.com" },
    { name: "bruce", age: 50, email: "bruce@test.com" }
  ];

  return (
    <div>
      {users.map((item, i) => (
        <User key={i} data={item} />
      ))}
    </div>
  );
}

export default App;
















function App(){
  const usernames=['anil','sam','peter','bruce'];
  const usernameData=[
    {
      names:'Anil',
      age:'29',
      email:"anil@test.com",
      id:1
    },
    {
      names:'prince',
      age:'29',
      email:"prince@test.com",
      id:2
    },
    {
      names:'ram',
      age:'24',
      email:"ram@test.com",
      id:3
    },
    {
      names:'abhay',
      age:'20',
      email:"abhay@test.com",
      id:4
    }
  ]
  return(
    <div>
      <h1>Loop in JSX Map Function</h1>
    </div>
  )

}*/

//use effect

import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // Run when counter changes
  useEffect(() => {
    console.log("Counter value changed:", counter);
  }, [counter]);

  // Run only once (on component mount)
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  function counterFunction() {
    console.log("Counter Function", counter);
  }

  function callOnce() {
    console.log("CallOnce function called");
  }

  return (
    <div>
      <h1>React useEffect Example</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={counterFunction}>Run Counter Function</button>
      <button onClick={callOnce}>Run CallOnce Function</button>
    </div>
  );
}

export default App;
