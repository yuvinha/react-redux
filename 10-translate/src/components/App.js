import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import { ColorStore } from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import ColorSelector from "./ColorSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <ColorStore>
            <ColorSelector onColorChange={this.onColorChange} />
            <UserCreate />
          </ColorStore>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
