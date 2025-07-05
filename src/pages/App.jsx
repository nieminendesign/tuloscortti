import React, { useState } from 'react';
import CourseSelector from '../views/CourseSelector.jsx';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Tuloscortti – Kenttä & HCP</h1>
      <CourseSelector />
    </div>
  );
}