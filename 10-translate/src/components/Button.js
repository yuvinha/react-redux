import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  /* For this.context */
  // static contextType = LanguageContext;

  renderButton(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    /* For this.context */
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    // return <button className="ui button primary">{text}</button>;

    return (
      <ColorContext.Consumer>
        {({ color }) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderButton(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
