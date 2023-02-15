import React from "react";
import Tabs from "../../atoms/Tabs";
import "./MainTemplate.css";

const MainTemplate = ({ children }) => {
  if(!window.sessionStorage.getItem("selectedTabId") && !window.sessionStorage.getItem("selectedTabName")) {
    window.sessionStorage.setItem("selectedTabId", "LISTA DE TROCADILHOS");
    window.sessionStorage.setItem("selectedTabName", "Lista de Trocadilhos");
  }
  const selectedTabId = window.sessionStorage.getItem("selectedTabId");
  const selectedTabName = window.sessionStorage.getItem("selectedTabName");
  return (
    <div className="main-template">
      <h1 className="main-template__title">Trocadilho Awards</h1>
      <header className="main-template__header">
        <Tabs currentTab={{ id: selectedTabId, selected: true }} />
      </header>
      <main className="main-template__content">
        <h2 className="main-template__content__title">{selectedTabName}</h2>
        {children}
      </main>
    </div>
  );
};

export default MainTemplate;
