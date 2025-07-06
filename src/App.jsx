import React, { useState } from 'react';
import CourseSelector from './views/CourseSelector';
import PlayerForm from './views/PlayerForm';
import HoleRangeSelector from './views/HoleRangeSelector';
import StatOptions from './views/StatOptions';
import { Button, Box, Typography } from '@mui/material';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [player, setPlayer] = useState({ name: '', gender: 'male' });
  const [holeRange, setHoleRange] = useState('full');
  const [selectedStats, setSelectedStats] = useState([]);

  const handleStart = () => {
    console.log('Peli alkaa:', { selectedCourse, player, holeRange, selectedStats });
    // Navigoi peliin tai tallenna firebaseen tms.
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h5" gutterBottom>Tervetuloa Tuloscorttiin</Typography>

      {!selectedCourse && (
        <CourseSelector selectedCourse={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} />
      )}

      {selectedCourse && (
        <>
          <Box mt={3}>
            <PlayerForm player={player} onChange={setPlayer} />
          </Box>
          <Box mt={3}>
            <HoleRangeSelector value={holeRange} onChange={(e, val) => val && setHoleRange(val)} />
          </Box>
          <Box mt={3}>
            <StatOptions selectedStats={selectedStats} setSelectedStats={setSelectedStats} />
          </Box>
          <Box mt={4}>
            <Button variant="contained" color="primary" fullWidth onClick={handleStart}>
              Aloita kierros
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}