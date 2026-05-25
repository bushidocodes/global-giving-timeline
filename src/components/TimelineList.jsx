import React from "react";
import { connect } from "react-redux";
import TimelineListItem from "./TimelineListItem";

function Timeline({ items, loading, error }) {
  if (loading) return <div className="spinner" />;
  if (error) return <div className="error-state">Could not load timeline: {error}</div>;

  let lastUserName = "";
  return items.map((item) => {
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
  return {
    items: [...timeline.items].reverse(),
    loading: timeline.loading,
    error: timeline.error,
  };
}

export default connect(mapStateToProps)(Timeline);
