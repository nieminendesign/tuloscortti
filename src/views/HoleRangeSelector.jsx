// Etuysi / Takaysi / 18 reikää
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export default function HoleRangeSelector({ value, onChange }) {
  return (
    <ToggleButtonGroup value={value} exclusive onChange={onChange}>
      <ToggleButton value="front9">Etuysi</ToggleButton>
      <ToggleButton value="back9">Takaysi</ToggleButton>
      <ToggleButton value="full">Koko kierros</ToggleButton>
    </ToggleButtonGroup>
  );
}