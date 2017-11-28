import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TabsMenu() {
  return (
    <Tabs>
      <TabList>
        <Tab>My Arms Wide Open</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
        <Tab>Step for Bulgaria Foundation</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}
