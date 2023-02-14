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
    <div className="container">
      <div className="container__wrapper">
        {tabs.map((tab) => {
          const selected = tab.id === currentTab.id;
          const style = {
            color: selected ? "lightskyblue" : "gray",
            borderBottom: selected ? "2px solid" : "none",
            paddingBottom: selected ? "10px" : "none",
          };
          return (
            <div className="container__tabBox" key={tab.name} style={style}>
              <span
                className="container__tabBox__tab"
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
