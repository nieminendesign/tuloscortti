import React, { useState } from 'react';
import { signInAnon } from '../firebase';
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [hole, setHole] = useState(1);
  const [scores, setScores] = useState({});

  const login = async () => { await signInAnon(); setLoggedIn(true); };

  const handleScore = (e) => {
    setScores({ ...scores, [hole]: e.target.value });
  };

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4 text-primary'>Tuloscortti</h1>
      {!loggedIn ? (
        <button onClick={login} className='bg-primary text-white px-4 py-2 rounded'>Kirjaudu anonyymisti</button>
      ) : (
        <div>
          <h2 className='text-lg mb-2'>Väylä {hole}</h2>
          <input type='number' value={scores[hole] || ''} onChange={handleScore} className='border p-2 rounded w-full mb-4' />
          <div className='flex justify-between'>
            <button disabled={hole <= 1} onClick={() => setHole(hole - 1)} className='bg-secondary text-white px-4 py-2 rounded'>←</button>
            <button disabled={hole >= 18} onClick={() => setHole(hole + 1)} className='bg-secondary text-white px-4 py-2 rounded'>→</button>
          </div>
          <h3 className='mt-6 text-lg font-semibold'>Tulokset:</h3>
          <ul className='list-disc ml-4'>
            {Object.entries(scores).map(([k, v]) => (
              <li key={k}>Väylä {k}: {v} lyöntiä</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}