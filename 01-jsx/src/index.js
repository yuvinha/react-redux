// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const btnStyle = {
  backgroundColor: "green",
  color: "white",
};

const App = () => {
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter name:{" "}
      </label>
      <input type="text" id="name" />
      <button style={btnStyle}>Submit</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
