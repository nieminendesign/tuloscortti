import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const courseData = {
  "Pirunpelto": {
    "par": 72,
    "tees": {
      "valkoinen": { rating: 72.9, slope: 137 },
      "keltainen": { rating: 71.0, slope: 133 },
      "sininen": { rating: 69.2, slope: 128 },
      "punainen": { rating: 67.4, slope: 123 }
    }
  }
};

export default function CourseSelector() {
  const [course, setCourse] = useState("Pirunpelto");
  const [tee, setTee] = useState("keltainen");
  const [hcpIndex, setHcpIndex] = useState(15.0);
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();

  const selected = courseData[course]?.tees[tee];
  const coursePar = courseData[course]?.par || 72;
  const rating = selected?.rating || 72;
  const slope = selected?.slope || 113;

  const playingHcp = Math.round((hcpIndex * slope) / 113 + (rating - coursePar));

  const startRound = () => {
    const setup = {
      course,
      tee,
      hcpIndex,
      gender,
      playingHcp
    };
    localStorage.setItem("tuloscortti-setup", JSON.stringify(setup));
    navigate("/score");
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Kierroksen asetukset</h2>
      <label>Kenttä:
        <select value={course} onChange={e => setCourse(e.target.value)}>
          {Object.keys(courseData).map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>Tii:
        <select value={tee} onChange={e => setTee(e.target.value)}>
          {Object.keys(courseData[course].tees).map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
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
      <br /><br />
      <strong>Pelitasoitus: {playingHcp} lyöntiä</strong>
      <br /><br />
      <button onClick={startRound}>Aloita kierros</button>
    </div>
  );
}