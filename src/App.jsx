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

function App(){
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
export default App