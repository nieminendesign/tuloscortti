import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseSelector from '../views/CourseSelector.jsx';
import ScoreEntry from '../views/ScoreEntry.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CourseSelector />} />
      <Route path="/score" element={<ScoreEntry />} />
    </Routes>
  );
}