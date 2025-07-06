// Pelaajan nimi, sukupuoli, tii ja tilastovalinnat
import { TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

export default function PlayerForm({ player, onChange }) {
  return (
    <Box>
      <TextField label="Nimi" value={player.name} onChange={(e) => onChange({ ...player, name: e.target.value })} />
      <FormControl fullWidth>
        <InputLabel>Sukupuoli</InputLabel>
        <Select value={player.gender} onChange={(e) => onChange({ ...player, gender: e.target.value })}>
          <MenuItem value="male">Mies</MenuItem>
          <MenuItem value="female">Nainen</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}