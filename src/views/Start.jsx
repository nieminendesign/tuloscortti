import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Start() {
  const navigate = useNavigate();
  const [holes, setHoles] = useState(18);
  return (
    <div>
      <h1>Aloita kierros</h1>
      <label>Reikien määrä:
        <select onChange={e => setHoles(parseInt(e.target.value))}>
          <option value="9">Etuysi</option>
          <option value="9b">Takaysi</option>
          <option value="18">Koko kierros</option>
        </select>
      </label>
      <button onClick={() => navigate('/score')}>Aloita</button>
    </div>
  );
}