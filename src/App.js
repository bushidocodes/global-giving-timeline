import React, { Component } from "react";
import { Provider } from "react-redux";
import TimelineList from "./components/TimelineList";

import logo from "./gg_horizontal_color_600.png";
import "./App.css";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Timeline</h1>
          </header>
          <TimelineList />
        </div>
      </Provider>
    );
  }
}

export default App;
