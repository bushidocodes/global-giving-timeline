import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Select from "./components/Select";
import TimelineList from "./components/TimelineList";
import { loadOrgs, loadTimeline } from "./actions";
import logo from "./gg_horizontal_color_600.png";
import "./App.css";

function App({ selectedOrg, orgsLoading, orgsError, loadOrgs, loadTimeline }) {
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

  function renderBody() {
    if (orgsLoading) return <div className="spinner" />;
    if (orgsError) return <div className="error-state">Could not load organizations: {orgsError}</div>;
    if (!selectedOrg) return <div className="empty-state">Select an organization above to view its timeline.</div>;
    return <TimelineList />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Timeline</h1>
      </header>
      <Select />
      {renderBody()}
    </div>
  );
}

function mapStateToProps({ settings: { selectedOrg }, orgs }) {
  return {
    selectedOrg,
    orgsLoading: orgs.loading,
    orgsError: orgs.error,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loadOrgs: () => dispatch(loadOrgs()),
  loadTimeline: () => dispatch(loadTimeline()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
