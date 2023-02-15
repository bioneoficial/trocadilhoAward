import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "./pages/Ranking";
import PunAddPage from "./pages/PunAdd";
import PunListPage from "./pages/PunList";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PunListPage />} />
      <Route path="/adicionar-trocadilho" element={<PunAddPage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
