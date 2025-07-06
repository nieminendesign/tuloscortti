import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function GameView() {
  const [hole, setHole] = useState(1);
  const [scores, setScores] = useState({});
  const [putts, setPutts] = useState({});
  const [gameSettings, setGameSettings] = useState(null);

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('gameSettings'));
    setGameSettings(settings);
  }, []);

  const handleChange = (type, delta) => {
    const key = type === 'score' ? scores : putts;
    const setter = type === 'score' ? setScores : setPutts;
    const value = (key[hole] || 0) + delta;
    setter({ ...key, [hole]: Math.max(0, value) });
  };

  if (!gameSettings) return <Typography>Ladataan...</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">{gameSettings.playerName} – Väylä {hole}/18</Typography>
      <Typography variant="body2">Tii: {gameSettings.tee}, Sukupuoli: {gameSettings.gender}</Typography>

      <Box mt={3}>
        <Typography variant="subtitle1">Lyönnit</Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => handleChange('score', -1)}><RemoveIcon /></IconButton>
          <TextField value={scores[hole] || 0} size="small" sx={{ width: 60 }} inputProps={{ readOnly: true }} />
          <IconButton onClick={() => handleChange('score', 1)}><AddIcon /></IconButton>
        </Box>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle1">Putit</Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => handleChange('putt', -1)}><RemoveIcon /></IconButton>
          <TextField value={putts[hole] || 0} size="small" sx={{ width: 60 }} inputProps={{ readOnly: true }} />
          <IconButton onClick={() => handleChange('putt', 1)}><AddIcon /></IconButton>
        </Box>
      </Box>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={() => setHole(hole > 1 ? hole - 1 : 1)}>← Edellinen</Button>
        <Button variant="outlined" onClick={() => setHole(hole < 18 ? hole + 1 : 18)}>Seuraava →</Button>
      </Box>
    </Box>
  );
}