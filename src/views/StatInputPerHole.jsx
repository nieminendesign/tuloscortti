// Tilastokentät per väylä pelaajalle
import { TextField, Box } from '@mui/material';

export default function StatInputPerHole({ stats, onUpdate }) {
  return (
    <Box>
      <TextField label="Putit" value={stats.putts || ''} onChange={(e) => onUpdate({ ...stats, putts: e.target.value })} />
      <TextField label="Avaus" value={stats.drive || ''} onChange={(e) => onUpdate({ ...stats, drive: e.target.value })} />
    </Box>
  );
}