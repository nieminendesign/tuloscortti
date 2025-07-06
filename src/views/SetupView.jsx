import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

export default function SetupView() {
  const navigate = useNavigate();
  const [course, setCourse] = useState('');

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">Kentän valinta</Typography>
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="">Valitse kenttä</option>
        <option value="pirunpelto">Pirunpelto</option>
        <option value="jarvenranta">Järvenranta</option>
      </select>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        disabled={!course}
        onClick={() => navigate('/game')}
      >
        Aloita kierros
      </Button>
    </Box>
  );
}