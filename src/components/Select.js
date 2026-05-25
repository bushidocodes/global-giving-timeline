import React, { Component } from "react";
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

class SelectMenu extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectedOption) {
    this.props.selectOrg(selectedOption.value);
    setTimeout(this.props.loadTimeline, 50);
  }
  render() {
    const { selectedOrgID, orgs } = this.props;
    const options = _.map(orgs, (value) => {
      return {
        value: value.OrgId,
        label: value.Name,
        logoURL: value.LogoUrl
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

const mapDispatchToProps = (dispatch) => ({
  selectOrg: (orgID) => dispatch(selectOrg(orgID)),
  loadTimeline: () => dispatch(loadTimeline())
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
