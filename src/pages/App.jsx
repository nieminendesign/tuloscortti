import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseSelector from '../views/CourseSelector.jsx';
import ScoreEntry from '../views/ScoreEntry.jsx';
import Summary from '../views/Summary.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CourseSelector />} />
      <Route path="/score" element={<ScoreEntry />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}