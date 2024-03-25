import { useState } from "react";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SolaraLogin from "./pages/Login/SolaraLogin";
import GreenLogin from "./pages/Login/GreenLogin";
import BlueLogin from "./pages/Login/BlueLogin";
import LeftLogin from "./pages/Login/LeftLogin";
import AddJobPage from "./pages/AddJobPage";
import Header from "./components/Header";
import LearnPage from "./pages/LearnPage";
import TemplatesPage from "./pages/TemplatesPage";
import PromptsPage from "./pages/PromptsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TemplatesPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route index path="templates" element={<TemplatesPage />} />
          <Route path="/prompts" element={<PromptsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  // return <SolaraLogin />;
  // return <AddJobPage />;
}

export default App;
