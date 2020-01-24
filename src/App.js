import React, { Component } from "react";
import "./App.css";

import Home from "./1-first-component/Home";
import Header from "./2-prop-to-component/Header"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Learning"
    };
  }

  render() {
    return (
      <div>
        <header className="bg-dark App-header">
          <h4 className="text-white text-center p-2">
            {this.state.userName} 
            <Header />
          </h4>
        </header>
        {/* body */}
        <div className="body">
          <Home />

        </div>
      </div>
    );
  }
}

export default App;
