import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Select from "./components/Select";
import TimelineList from "./components/TimelineList";
import { setOrgs, loadTimeline } from "./actions";
import logo from "./gg_horizontal_color_600.png";
import "./App.css";

function App({ timeline, selectedOrg, loadOrgs, loadTimeline }) {
  // Refs keep the interval callback pointing at the latest prop values
  // without requiring the interval to be recreated on every render.
  const selectedOrgRef = useRef(selectedOrg);
  selectedOrgRef.current = selectedOrg;

  const loadTimelineRef = useRef(loadTimeline);
  loadTimelineRef.current = loadTimeline;

  useEffect(() => {
    loadOrgs();
    loadTimelineRef.current();
    const timer = setInterval(() => {
      if (selectedOrgRef.current) loadTimelineRef.current();
    }, 5000);
    return () => clearInterval(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

function mapStateToProps({ timeline, settings: { selectedOrg } }) {
  return { timeline, selectedOrg };
}

const mapDispatchToProps = (dispatch) => ({
  loadOrgs() {
    const base = import.meta.env.VITE_API_BASE_URL;
    axios
      .get(`${base}/getorganizations`)
      .then(({ data }) => dispatch(setOrgs(data)));
  },
  loadTimeline: () => dispatch(loadTimeline())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
