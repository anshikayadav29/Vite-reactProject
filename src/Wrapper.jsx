/*function Wrapper() {
  return (
    <div style={{ color: "green", border: "5px solid green", width: "200px" }}>
      <h1>Hello Everyone</h1>
    </div>
  )
}

export default Wrapper;*/
function Wrapper({ color = "green", children }) {
  return (
    <div style={{ color: color, border: `5px solid ${color}`, width: "250px", margin: "10px", padding: "10px" }}>
      {children}
    </div>
  )
}

export default Wrapper
//props end

