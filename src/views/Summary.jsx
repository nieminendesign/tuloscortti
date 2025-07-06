import React, { useEffect, useState } from 'react';

export default function Summary() {
  const [setup, setSetup] = useState(null);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const s = localStorage.getItem("tuloscortti-setup");
    const sc = localStorage.getItem("tuloscortti-scores");
    if (s && sc) {
      setSetup(JSON.parse(s));
      setScores(JSON.parse(sc));
    }
  }, []);

  if (!setup || scores.length === 0) return <div>Ladataan...</div>;

  const netTotal = scores.reduce((acc, s) => acc + parseInt(s.score || 0), 0) - setup.playingHcp;

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Yhteenveto</h2>
      <p>Pelattu: {setup.holes} reikää – Pelitasoitus: {setup.playingHcp}</p>
      <p>Netto: {netTotal} lyöntiä</p>
      <ul>
        {scores.map((s, i) => (
          <li key={i}>Väylä {i + 1}: {s.score} lyöntiä {setup.stats.putts && `(${s.putts} puttia)`}</li>
        ))}
      </ul>
    </div>
  );
}