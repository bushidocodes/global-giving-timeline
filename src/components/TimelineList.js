import React, { Component } from "react";
import { connect } from "react-redux";
import TimelineListItem from "./TimelineListItem";
import axios from "axios";
import { setTimeline } from "../actions";

class Timeline extends Component {
  componentDidMount() {
    // this.props.loadTimeline();
    // window.pollingTimer = window.setInterval(
    //   () => this.props.loadTimeline(),
    //   5000
    // );
  }
  componentWillUnmount() {
    // window.clearInterval(window.pollingTimer);
    // window.pollingTimer = "";
  }
  render() {
    let lastUserName = "";
    const { timeline = [] } = this.props;
    return timeline.map(item => {
      const currentUserName = item.user && item.user.name;
      const valToReturn = (
        <TimelineListItem
          key={`${item.timestamp}-${item.user.name}`}
          showUser={currentUserName !== lastUserName}
          {...item}
        />
      );
      lastUserName = currentUserName;
      return valToReturn;
    });
  }
}

function mapStateToProps({ timeline }) {
  return { timeline };
}

const mapDispatchToProps = dispatch => ({
  loadTimeline() {
    console.log("Loading the timeline");
    axios
      .get(
        "https://r3t2ak8274.execute-api.us-west-1.amazonaws.com/Prod/getPosts"
      )
      .then(timeline => dispatch(setTimeline(timeline)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
