import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import _ from "lodash";
import { selectOrg, loadTimeline } from "../actions";
import "react-select/dist/react-select.css";

function LogoValue({ value }) {
  var logoStyle = {
    borderRadius: 3,
    display: "inline-block",
    marginRight: 10,
    position: "relative",
    top: -2,
    verticalAlign: "middle",
    height: "100%"
  };
  return (
    <div className="Select-value" title={value.title}>
      <span className="Select-value-label">
        <img style={logoStyle} src={value.logoURL} alt={value.label} />
        <span>{value.label}</span>
      </span>
    </div>
  );
}

function SelectMenu({ selectedOrgID, orgs, selectOrg, loadTimeline }) {
  function handleChange(selectedOption) {
    selectOrg(selectedOption.value);
    setTimeout(loadTimeline, 50);
  }

  const options = _.map(orgs, (value) => ({
    value: value.OrgId,
    label: value.Name,
    logoURL: value.LogoUrl
  }));

  return (
    <Select
      name="form-field-name"
      value={selectedOrgID}
      onChange={handleChange}
      options={options}
      valueComponent={LogoValue}
    />
  );
}

const mapStateToProps = ({
  settings: { selectedOrg: selectedOrgID },
  orgs
}) => ({
  selectedOrgID,
  selectedOrg: orgs[selectedOrgID],
  orgs
});

const mapDispatchToProps = (dispatch) => ({
  selectOrg: (orgID) => dispatch(selectOrg(orgID)),
  loadTimeline: () => dispatch(loadTimeline())
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
