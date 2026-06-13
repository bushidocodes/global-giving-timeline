import React from "react";
import { connect } from "react-redux";
import type { RootState } from "../store";
import type { TimelinePost } from "../types";
import TimelineListItem from "./TimelineListItem";

interface TimelineProps {
  items: TimelinePost[];
  loading: boolean;
  error: string | null;
}

function Timeline({ items, loading, error }: TimelineProps) {
  if (loading) return <div className="spinner" />;
  if (error)
    return <div className="error-state">Could not load timeline: {error}</div>;

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

function mapStateToProps({ timeline }: RootState) {
  return {
    items: [...timeline.items].reverse(),
    loading: timeline.loading,
    error: timeline.error
  };
}

export default connect(mapStateToProps)(Timeline);
