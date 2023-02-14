import React from "react";
import "./Tabs.css";
import { TABS as tabs } from "../../utils/enums";
import { useNavigate } from "react-router-dom";

const Tabs = ({ currentTab }) => {
  const navigate = useNavigate();
  const onClick = (tab) => {
    navigate(tab.redirectTo);
  };

  return (
    <div className="tabs">
      <div className="tabs__wrapper">
        {tabs.map((tab) => {
          const selected = tab.id === currentTab.id;
          return (
            <div className={`tabs__tabBox ${selected ? 'tabs__tabBox--selected' : ''}`} key={tab.name}>
              <span
                className="tabs__tabBox__tab"
                key={tab.name}
                onClick={() => [
                  onClick(tab),
                  window.localStorage.setItem("selectedTabId", tab.id),
                  window.localStorage.setItem("selectedTabName", tab.name)
                ]}
              >
                {tab.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
