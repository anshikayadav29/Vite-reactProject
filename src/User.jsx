/*function User() {
  return <h2>Hello from User Component</h2>;
}

export default User;*/

function User({name,age,email}) {
  return(
    <div>
     <h2>Name:{name}</h2>
     <h2>Age:{age}</h2>
     <h2>Email:{email}</h2>

    </div>
  )  
}

export default User;

