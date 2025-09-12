/*function College() {
  return (
    <div>
      <h1>College</h1>
    </div>
  )
}

export default College;
*/

import React from "react";

function College({ name, city, website, students }) {
  return (
    <div style={{ background: "#ddd", padding: "20px", margin: "20px 0" }}>
      <h2>Name: {name}</h2>
      <p><b>City:</b> {city}</p>
      <p><b>Website:</b> {website}</p>
      <p><b>Students</b></p>
      <ul>
        {students.map((stu, index) => (
          <li key={index}>Name : {stu}</li>
        ))}
      </ul>
    </div>
  );
}

export default College;
