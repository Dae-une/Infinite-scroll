import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntersectionPage from "./pages/IntersectionPage";
import RfaTestPage from "./pages/RfaTestPage";

import ScrollEventPage from "./pages/ScrollEventPage";
import ThrottlePage from "./pages/ThrottlePage";
import TransitionPage from "./pages/TransitionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScrollEventPage />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/throttle" element={<ThrottlePage />} />
        <Route path="/rfathrottle" element={<RfaTestPage />} />
        <Route path="/intersection" element={<IntersectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
