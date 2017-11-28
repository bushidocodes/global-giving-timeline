import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";
import Select from "./components/Select";

import TimelineList from "./components/TimelineList";

import { setOrgs, loadTimeline } from "./actions";

import logo from "./gg_horizontal_color_600.png";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.loadOrgs();
    this.props.loadTimeline();
    window.pollingTimer = window.setInterval(() => {
      console.log(this.props.selectedOrg || "Nothing yet selected");
      if (this.props.selectedOrg) this.props.loadTimeline();
    }, 5000);
  }
  componentWillUnmount() {
    if (window.pollingTimer) {
      window.clearInterval(window.pollingTimer);
      window.pollingTimer = "";
    }
  }
  render() {
    const { timeline } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Timeline</h1>
        </header>
        <Select />
        {timeline ? <TimelineList /> : <div>Select an Org</div>}
      </div>
    );
  }
}

function mapStateToProps({ timeline, settings: { selectedOrg } }) {
  return { timeline, selectedOrg };
}

const mapDispatchToProps = (dispatch, getState) => ({
  loadOrgs() {
    console.log("Loading the orgs");
    axios
      .get(
        "https://9q0134xluk.execute-api.us-west-1.amazonaws.com/dev/getorganizations"
      )
      .then(({ data }) => dispatch(setOrgs(data)));
  },
  loadTimeline: () => dispatch(loadTimeline())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
