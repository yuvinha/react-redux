import React from "react";
import ColorContext from "../contexts/ColorContext";

class ColorSelector extends React.Component {
  static contextType = ColorContext;

  render() {
    return (
      <div>
        Select a color:
        <span
          style={{
            display: "inline-block",
            width: "12px",
            height: "12px",
            borderRadius: "3px",
            backgroundColor: "#2185d0",
            marginRight: "3px",
          }}
          onClick={() => this.context.onColorChange("primary")}
        ></span>
        <span
          style={{
            display: "inline-block",
            width: "12px",
            height: "12px",
            borderRadius: "3px",
            backgroundColor: "#db2828",
          }}
          onClick={() => this.context.onColorChange("red")}
        ></span>
      </div>
    );
  }
}

export default ColorSelector;
