import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import _ from "lodash";
import { selectOrg, loadTimeline } from "../actions";
import "react-select/dist/react-select.css";

function LogoValue({ image, value, children }) {
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
        <img style={logoStyle} src={value.logoURL} />
        <span>{value.label}</span>
      </span>
    </div>
  );
}

class SelectMenu extends Component {
  handleChange = selectedOption => {
    this.props.selectOrg(selectedOption.value);
    setTimeout(this.props.loadTimeline, 50);
  };
  render() {
    const { selectedOrgID, selectedOrg, orgs } = this.props;
    const selectedOrgName = selectedOrg ? selectedOrg.name : "";
    const selectedOrgLogoURL = selectedOrg ? selectedOrg.logoURL : "";
    const options = _.map(orgs, (value, key) => {
      return {
        value: value.OrgId,
        label: value.Name,
        logoURL: value.LogoURL
      };
    });
    return (
      <Select
        name="form-field-name"
        value={selectedOrgID}
        onChange={this.handleChange}
        options={options}
        valueComponent={LogoValue}
      />
    );
  }
}

const mapStateToProps = ({
  settings: { selectedOrg: selectedOrgID },
  orgs
}) => ({
  selectedOrgID,
  selectedOrg: orgs[selectedOrgID],
  orgs
});

const mapDispatchToProps = dispatch => ({
  selectOrg: orgID => dispatch(selectOrg(orgID)),
  loadTimeline: () => dispatch(loadTimeline())
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
