import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Summary() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Yhteenveto</h1>
      <p>Tulokset väylittäin + tilastot</p>
      <button onClick={() => navigate('/export')}>Vie tuloskortti</button>
    </div>
  );
}