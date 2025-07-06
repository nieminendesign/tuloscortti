import React, { useEffect, useState } from 'react';

export default function ScoreEntry() {
  const [setup, setSetup] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("tuloscortti-setup");
    if (data) setSetup(JSON.parse(data));
  }, []);

  if (!setup) return <div>Ladataan...</div>;

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>{setup.course} – {setup.tee}</h2>
      <p>Pelaaja: {setup.gender === "male" ? "Mies" : "Nainen"}, HCP: {setup.hcpIndex}, Pelitasoitus: {setup.playingHcp}</p>
      <p>Väyläkohtainen syöttö ja tilastot tulossa tähän</p>
    </div>
  );
}