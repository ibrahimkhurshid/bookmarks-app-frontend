import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedBookmark from "./components/detailedbookmark/DetailedBookmark";
import Api from "./pages/Api";
import { HOST } from "./env";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<DetailedBookmark />} />
      <Route path="/api" element={<Api src={`${HOST}api`} />} />
    </Routes>
  </BrowserRouter>
);
