import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import TimelineListItem from "./TimelineListItem";

class Timeline extends Component {
  render() {
    let lastUserName = "";
    const { timeline = [] } = this.props;
    return timeline.map((item) => {
      const currentUserName = item.UserId;
      const valToReturn = (
        <TimelineListItem
          key={`${item.Timestamp}-${item.UserId}`}
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
  return { timeline: _.reverse(timeline) };
}

export default connect(mapStateToProps)(Timeline);
