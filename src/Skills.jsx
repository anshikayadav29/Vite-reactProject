/*function Skills() {
  return (
    <div>
      <h3>Select Your Skills</h3>
      <input type="checkbox" id="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />

      <input type="checkbox" id="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />

      <input type="checkbox" id="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />

      <input type="checkbox" id="php" />
      <label htmlFor="php">PHP</label>
      
    </div>
  );
}

export default Skills;*/

/*function Skills() {
  return (
    <div>
      <h3>Select Your Skills</h3>
      <input type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="php" />
      <label htmlFor="js">JS</label>
      <br />
      <br />

      <input type="checkbox" id="php" />
      <label htmlFor="node">Node</label>
      <br />
      <br />

      <input type="checkbox" id="node" value="node" />
      <label htmlFor="node">NODE</label>
      <br />
      <br />

      <input type="checkbox" id="java" value="java" />
      <label htmlFor="java">JAVA</label>
    </div>
  );
}

export default Skills;*/
//SOME CHANGE

import { useState } from "react";
function Skills() {
  const [skills,setSkills]=useState(["java","php"])
  return (
    <div>
      <h3>Select Your Skills</h3>
      <input type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="php" />
      <label htmlFor="js">JS</label>
      <br />
      <br />

      <input type="checkbox" id="php" />
      <label htmlFor="node">Node</label>
      <br />
      <br />

      <input type="checkbox" id="node" value="node" />
      <label htmlFor="node">NODE</label>
      <br />
      <br />

      <input type="checkbox" id="java" value="java" />
      <label htmlFor="java">JAVA</label>
      <h1>{skills.toString()}</h1>
    </div>
  );
}

export default Skills;


