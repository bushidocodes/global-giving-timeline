import React from "react";
import Select, { components } from "react-select";
import { connect } from "react-redux";
import { selectOrg, loadTimeline } from "../actions";

const logoStyle = {
  borderRadius: 3,
  display: "inline-block",
  marginRight: 10,
  position: "relative",
  top: -2,
  verticalAlign: "middle",
  height: "1em",
};

function LogoValue(props) {
  return (
    <components.SingleValue {...props}>
      <img
        style={logoStyle}
        src={props.data.logoURL}
        alt={props.data.label}
      />
      <span>{props.children}</span>
    </components.SingleValue>
  );
}

function SelectMenu({ selectedOrgID, orgs, selectOrg, loadTimeline }) {
  function handleChange(selectedOption) {
    if (!selectedOption) return;
    selectOrg(selectedOption.value);
    setTimeout(loadTimeline, 50);
  }

  const options = Object.values(orgs).map((org) => ({
    value: org.OrgId,
    label: org.Name,
    logoURL: org.LogoUrl,
  }));

  const selectedOption = options.find((o) => o.value === selectedOrgID) ?? null;

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      components={{ SingleValue: LogoValue }}
    />
  );
}

const mapStateToProps = ({ settings: { selectedOrg: selectedOrgID }, orgs }) => ({
  selectedOrgID,
  orgs,
});

const mapDispatchToProps = (dispatch) => ({
  selectOrg: (orgID) => dispatch(selectOrg(orgID)),
  loadTimeline: () => dispatch(loadTimeline()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
