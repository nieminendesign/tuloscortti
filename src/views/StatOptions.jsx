// Pelaaja valitsee mitkä tilastot haluaa syöttää
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function StatOptions({ selectedStats, setSelectedStats }) {
  const options = ['Putit', 'Avaus', 'Lähestyminen', 'Chippi'];

  return (
    <FormGroup>
      {options.map(opt => (
        <FormControlLabel
          key={opt}
          control={<Checkbox checked={selectedStats.includes(opt)} onChange={() => {
            setSelectedStats(selectedStats.includes(opt)
              ? selectedStats.filter(o => o !== opt)
              : [...selectedStats, opt]);
          }} />}
          label={opt}
        />
      ))}
    </FormGroup>
  );
}