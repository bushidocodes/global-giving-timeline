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

  return items.map((item, index) => (
    <TimelineListItem
      key={`${item.Timestamp}-${item.UserId}`}
      showUser={index === 0 || item.UserId !== items[index - 1].UserId}
      {...item}
    />
  ));
}

function mapStateToProps({ timeline }: RootState) {
  return {
    items: [...timeline.items].reverse(),
    loading: timeline.loading,
    error: timeline.error
  };
}

export default connect(mapStateToProps)(Timeline);
