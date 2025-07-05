import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from '../views/Start.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>
  );
}
