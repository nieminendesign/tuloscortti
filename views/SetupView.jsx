import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, MenuItem, Select, TextField, Typography, FormControl, InputLabel } from '@mui/material';

export default function SetupView() {
  const navigate = useNavigate();
  const [course, setCourse] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [gender, setGender] = useState('male');
  const [tee, setTee] = useState('yellow');

  const handleStart = () => {
    const gameSettings = {
      course,
      playerName,
      gender,
      tee,
    };
    localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
    navigate('/game');
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Aseta kierros</Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Kenttä</InputLabel>
        <Select value={course} label="Kenttä" onChange={(e) => setCourse(e.target.value)}>
          <MenuItem value="pirunpelto">Pirunpelto</MenuItem>
          <MenuItem value="jarvenranta">Järvenranta</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Pelaajan nimi"
        fullWidth
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Sukupuoli</InputLabel>
        <Select value={gender} label="Sukupuoli" onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="male">Mies</MenuItem>
          <MenuItem value="female">Nainen</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Tii</InputLabel>
        <Select value={tee} label="Tii" onChange={(e) => setTee(e.target.value)}>
          <MenuItem value="white">Valkoinen</MenuItem>
          <MenuItem value="yellow">Keltainen</MenuItem>
          <MenuItem value="blue">Sininen</MenuItem>
          <MenuItem value="red">Punainen</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        onClick={handleStart}
        disabled={!course || !playerName}
        fullWidth
      >
        Aloita kierros
      </Button>
    </Box>
  );
}