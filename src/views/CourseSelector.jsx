import React, { useState } from 'react';

const courseData = {
  "Pirunpelto": {
    "par": 72,
    "tees": {
      "valkoinen": { rating: 72.9, slope: 137 },
      "keltainen": { rating: 71.0, slope: 133 },
      "sininen": { rating: 69.2, slope: 128 },
      "punainen": { rating: 67.4, slope: 123 }
    }
  },
  "Järvenranta": {
    "par": 72,
    "tees": {
      "valkoinen": { rating: 73.1, slope: 134 },
      "keltainen": { rating: 71.3, slope: 130 },
      "sininen": { rating: 69.5, slope: 126 },
      "punainen": { rating: 67.7, slope: 122 }
    }
  }
};

export default function CourseSelector() {
  const [course, setCourse] = useState("Pirunpelto");
  const [tee, setTee] = useState("keltainen");
  const [hcpIndex, setHcpIndex] = useState(15.0);

  const selected = courseData[course]?.tees[tee];
  const coursePar = courseData[course]?.par || 72;
  const rating = selected?.rating || 72;
  const slope = selected?.slope || 113;

  const playingHcp = ((hcpIndex * slope) / 113 + (rating - coursePar)).toFixed(1);

  return (
    <div>
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
      <br /><br />
      <strong>Pelitasoitus: {playingHcp} lyöntiä</strong>
    </div>
  );
}