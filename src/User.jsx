/*function User() {
  return <h2>Hello from User Component</h2>;
}

export default User;*/

/*function User({name,age,email}) {
  return(
    <div>
     <h2>Name:{name}</h2>
     <h2>Age:{age}</h2>
     <h2>Email:{email}</h2>

    </div>
  )  
}

export default User;*/
/*function User({ user }) {
  return (
    <div>
      <hr />
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  )
}

export default User;
*/




function User({ data }) {
  return (
    <div
      style={{
        border: "1px solid green",
        margin: "10px",
        padding: "10px",
        width: "300px",
        borderRadius: "8px"
      }}
    >
      <h3>
        Name: <span style={{ color: "green" }}>{data.name}</span>
      </h3>
      <h3>
        Age: <span style={{ color: "green" }}>{data.age}</span>
      </h3>
      <h3>
        Email: <span style={{ color: "green" }}>{data.email}</span>
      </h3>
    </div>
  );
}

export default User;