import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import Dashboard from './pages/Dashboard.tsx'
import Home from "./components/Home.tsx";

const root = document.getElementById("root");

if(!root){
  throw new Error("Root element not found. Please check your index.html file.");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);