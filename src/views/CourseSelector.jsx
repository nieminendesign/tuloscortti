// Dropdown kentän valintaan
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function CourseSelector({ selectedCourse, onChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel>Kenttä</InputLabel>
      <Select value={selectedCourse} onChange={onChange} label="Kenttä">
        <MenuItem value="Pirunpelto">Pirunpelto</MenuItem>
        <MenuItem value="Järvenranta">Järvenranta</MenuItem>
      </Select>
    </FormControl>
  );
}