import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Standard from "./pages/Standard.tsx";
import PageMain from "./pages/PageMain.tsx";

import "./index.css";

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Standard />} />
        <Route path="/PageMain" element={<PageMain />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
