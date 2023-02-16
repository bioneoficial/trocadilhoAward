import React from "react";
import "./Tabs.css";
import { TABS as tabs } from "../../utils/enums";
import { useNavigate } from "react-router-dom";

const Tabs = ({ currentTab }) => {
  const navigate = useNavigate();
  const onClick = (tab) => {
    window.sessionStorage.setItem("selectedTabId", tab.id);
    window.sessionStorage.setItem("selectedTabName", tab.name);
    navigate(tab.redirectTo);
  };

  return (
    <nav className="tabs">
      <ul className="tabs__list">
        {tabs.map((tab) => {
          const selected = tab.id === currentTab.id;
          return (
            <li
              className={`tabs__list-item ${
                selected ? "tabs__list-item--selected" : ""
              }`}
              key={tab.name}
            >
              <span
              role={"tab"}
                className="tabs__tab"
                key={tab.name}
                onClick={() => onClick(tab)}
              >
                {tab.name}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Tabs;
