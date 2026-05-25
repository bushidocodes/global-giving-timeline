import React from "react";
import { connect } from "react-redux";
import TimelineListItem from "./TimelineListItem";

function Timeline({ timeline = [] }) {
  let lastUserName = "";
  return timeline.map((item) => {
    const currentUserName = item.UserId;
    const showUser = currentUserName !== lastUserName;
    lastUserName = currentUserName;
    return (
      <TimelineListItem
        key={`${item.Timestamp}-${item.UserId}`}
        showUser={showUser}
        {...item}
      />
    );
  });
}

function mapStateToProps({ timeline }) {
  return { timeline: [...timeline].reverse() };
}

export default connect(mapStateToProps)(Timeline);
