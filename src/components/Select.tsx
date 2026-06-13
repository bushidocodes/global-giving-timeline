import React from "react";
import Select, { components, SingleValueProps } from "react-select";
import { connect } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { selectOrg, loadTimeline } from "../actions";
import type { Org } from "../types";

interface OrgOption {
  value: string;
  label: string;
  logoURL: string;
}

const logoStyle: React.CSSProperties = {
  borderRadius: 3,
  display: "inline-block",
  marginRight: 10,
  position: "relative",
  top: -2,
  verticalAlign: "middle",
  height: "1em"
};

function LogoValue(props: SingleValueProps<OrgOption>) {
  return (
    <components.SingleValue {...props}>
      <img style={logoStyle} src={props.data.logoURL} alt={props.data.label} />
      <span>{props.children}</span>
    </components.SingleValue>
  );
}

interface SelectMenuProps {
  selectedOrgID: string | null;
  orgs: Record<string, Org>;
  selectOrg: (id: string) => void;
  loadTimeline: () => void;
}

function SelectMenu({
  selectedOrgID,
  orgs,
  selectOrg,
  loadTimeline
}: SelectMenuProps) {
  function handleChange(selectedOption: OrgOption | null) {
    if (!selectedOption) return;
    selectOrg(selectedOption.value);
    loadTimeline();
  }

  const options: OrgOption[] = Object.values(orgs).map((org) => ({
    value: org.OrgId,
    label: org.Name,
    logoURL: org.LogoUrl
  }));

  const selectedOption = options.find((o) => o.value === selectedOrgID) ?? null;

  return (
    <Select<OrgOption>
      value={selectedOption}
      onChange={handleChange}
      options={options}
      components={{ SingleValue: LogoValue }}
    />
  );
}

function mapStateToProps({
  settings: { selectedOrg: selectedOrgID },
  orgs
}: RootState) {
  return {
    selectedOrgID,
    orgs: orgs.data
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    selectOrg: (orgID: string) => dispatch(selectOrg(orgID)),
    loadTimeline: () => dispatch(loadTimeline())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMenu);
