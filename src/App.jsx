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

export default App;