import React, { useState, useEffect } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const style = {
    background: "black",
    color: color,
    padding: "20px",
    fontSize: "40px",
    fontWeight: "bold",
    borderRadius: "10px",
    display: "inline-block",
    minWidth: "150px",
    textAlign: "center",
  };

  return <div style={style}>{time.toLocaleTimeString()}</div>;
}

// Default Props
Clock.defaultProps = {
  color: "blue",
};

export default Clock;
