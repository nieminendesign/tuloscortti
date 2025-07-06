import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SetupView from './views/SetupView';
import GameView from './views/GameView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SetupView />} />
      <Route path="/game" element={<GameView />} />
    </Routes>
  );
}