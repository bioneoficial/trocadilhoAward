import React from "react";
import Tabs from "../../atoms/Tabs";
import "./MainTemplate.css";

const MainTemplate = ({ children }) => {
  const selectedTabId = window.localStorage.getItem("selectedTabId");
  const selectedTabName = window.localStorage.getItem("selectedTabName");
  return (
    <div className="container">
      <h1>Trocadilho Awards</h1>
      <header className="container__header">
        <Tabs currentTab={{ id: selectedTabId, selected: true }} />
      </header>
      <main className="container__main">
        <h2>{selectedTabName}</h2>
        {children}
      </main>
    </div>
  );
};

export default MainTemplate;
