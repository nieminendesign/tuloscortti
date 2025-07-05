import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from '../views/Start.jsx';
import Score from '../views/Score.jsx';
import Summary from '../views/Summary.jsx';
import ExportCard from '../views/ExportCard.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/score" element={<Score />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/export" element={<ExportCard />} />
    </Routes>
  );
}