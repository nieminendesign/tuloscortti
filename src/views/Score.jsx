import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Score() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Tuloskortti</h1>
      <p>Syötä tulokset ja tilastot</p>
      <button onClick={() => navigate('/summary')}>Yhteenveto</button>
    </div>
  );
}