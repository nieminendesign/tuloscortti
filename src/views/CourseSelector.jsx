import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseSelector() {
  const [holes, setHoles] = useState(18);
  const [hcpIndex, setHcpIndex] = useState(15.0);
  const [gender, setGender] = useState("male");
  const [stats, setStats] = useState({
    putts: true,
    fairways: false,
    greens: true,
    chips: false
  });

  const navigate = useNavigate();

  const playingHcp = Math.round(hcpIndex); // yksinkertaistettu

  const startRound = () => {
    const setup = {
      holes,
      hcpIndex,
      gender,
      playingHcp,
      stats
    };
    localStorage.setItem("tuloscortti-setup", JSON.stringify(setup));
    navigate("/score");
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Kierroksen asetukset</h2>
      <label>Reikiä:
        <select value={holes} onChange={e => setHoles(parseInt(e.target.value))}>
          <option value={9}>Etuysi</option>
          <option value={18}>Koko kierros</option>
        </select>
      </label>
      <br />
      <label>Tasoitus (HCP):
        <input type="number" value={hcpIndex} onChange={e => setHcpIndex(parseFloat(e.target.value))} step="0.1" />
      </label>
      <br />
      <label>Sukupuoli:
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="male">Mies</option>
          <option value="female">Nainen</option>
        </select>
      </label>
      <br />
      <fieldset>
        <legend>Tilastot</legend>
        <label><input type="checkbox" checked={stats.putts} onChange={e => setStats({ ...stats, putts: e.target.checked })}/> Putit</label><br />
        <label><input type="checkbox" checked={stats.greens} onChange={e => setStats({ ...stats, greens: e.target.checked })}/> Green in Reg.</label><br />
        <label><input type="checkbox" checked={stats.fairways} onChange={e => setStats({ ...stats, fairways: e.target.checked })}/> Avaus väylään</label><br />
        <label><input type="checkbox" checked={stats.chips} onChange={e => setStats({ ...stats, chips: e.target.checked })}/> Chipit</label>
      </fieldset>
      <br />
      <button onClick={startRound}>Aloita kierros</button>
    </div>
  );
}