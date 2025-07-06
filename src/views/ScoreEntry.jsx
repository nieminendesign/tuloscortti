import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ScoreEntry() {
  const [setup, setSetup] = useState(null);
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("tuloscortti-setup");
    if (data) {
      const parsed = JSON.parse(data);
      setSetup(parsed);
      setScores(Array(parsed.holes).fill({ score: '', putts: '', fairway: '', green: '', chip: '' }));
    }
  }, []);

  const handleChange = (index, key, value) => {
    const updated = [...scores];
    updated[index][key] = value;
    setScores(updated);
  };

  if (!setup) return <div>Ladataan...</div>;

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Kierros – {setup.holes} reikää</h2>
      {scores.map((s, i) => (
        <div key={i}>
          <h4>Väylä {i + 1}</h4>
          <input type="number" placeholder="Tulos" value={s.score} onChange={e => handleChange(i, 'score', e.target.value)} />
          {setup.stats.putts && <input type="number" placeholder="Putit" value={s.putts} onChange={e => handleChange(i, 'putts', e.target.value)} />}
          {setup.stats.greens && <input type="checkbox" checked={s.green === 'x'} onChange={e => handleChange(i, 'green', e.target.checked ? 'x' : '')} />} Green
          {setup.stats.fairways && <input type="checkbox" checked={s.fairway === 'x'} onChange={e => handleChange(i, 'fairway', e.target.checked ? 'x' : '')} />} Väylä
          {setup.stats.chips && <input type="checkbox" checked={s.chip === 'x'} onChange={e => handleChange(i, 'chip', e.target.checked ? 'x' : '')} />} Chip
        </div>
      ))}
      <br />
      <button onClick={() => {
        localStorage.setItem("tuloscortti-scores", JSON.stringify(scores));
        navigate("/summary");
      }}>Valmis – Näytä yhteenveto</button>
    </div>
  );
}