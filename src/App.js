import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./organisms/Welcome";
import RankingPage from "./pages/Ranking";
import TrocadilhoAddPage from "./pages/TrocadilhoAdd";
import TrocadilhoListPage from "./pages/TrocadilhoList";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/lista-trocadilho" element={<TrocadilhoListPage />} />
      <Route path="/adicionar-trocadilho" element={<TrocadilhoAddPage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
