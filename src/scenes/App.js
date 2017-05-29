import React from "react";
import {getUSStateCapital} from "../services/StateLookupService";

const flagImage = require("../images/usa_flag.png");

const flagImageStyle = {
  width: "128px",
  height: "128px"
};

const inputContainerStyle = {
  overflow: "hidden",
  padding: "0 .5em 0 0"
};

const inputStyle = {
  width: "100%"
};

const inputButtonStyle = {
  float: "right"
};

class App extends React.Component {
  constructor() {
    super();

    this.getStateCapital = this.getStateCapital.bind(this);
    this.state = {searchTerm: "", answer: "", doneEvaluating: false};
  }

  getStateCapital(event) {
    event.preventDefault();

    var currentSearchTerm = this.state.searchTerm;

    var response = getUSStateCapital(currentSearchTerm);

    this.setState({
      answer: response[1],
      searchTerm: response[0],
      doneEvaluating: true
    });
  }

  render() {
    var currentSearchTerm = this.state.searchTerm;
    var currentAnswer = this.state.answer;
    var defaultAnswer = "Enter a state name above to get its capital.";
    var isNull = currentAnswer === "";
    var isInvalid = currentAnswer === "" && currentSearchTerm;
    var doneEvaluating = this.state.doneEvaluating;
    var stateUrl = "https://en.wikipedia.org/wiki/" + currentSearchTerm + "_(U.S._state)";

    return (
      <div className="container">
        <h1>
          <img style={flagImageStyle} src={flagImage}/>
          Get the capital of any U.S. state!
        </h1>
        <form className="commentForm" onSubmit={this.getStateCapital}>
          <button 
            style={inputButtonStyle}
            type="submit">
            Get Capital
          </button>
          <div style={inputContainerStyle}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Enter a U.S. state"
              value={currentSearchTerm}
              onChange={(event) => {this.setState({searchTerm: event.target.value, doneEvaluating: false});}}
            />
          </div>
        </form>
        <hr/>
        {
          isNull && doneEvaluating ? (
            isInvalid ? (
              <p><font color="red">{currentSearchTerm}</font> is not a U.S. state. Try again.</p>
            ) : (
              <p>{defaultAnswer}</p>
            )
          ) : (
            doneEvaluating ? (
              <p>The capital of {currentSearchTerm} is <b>{currentAnswer}</b>.
              <br/>
              <i>Learn more about the state of {currentSearchTerm} <a href={stateUrl}>here</a>.</i>
              </p>
            ) : (<p>{defaultAnswer}</p>)
          )
        }
      </div>
    );
  }
}

export default App;
