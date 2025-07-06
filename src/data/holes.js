// Väylädataa (mock), voidaan laajentaa muihin kenttiin
export const holes = Array.from({ length: 18 }, (_, i) => ({
  number: i + 1,
  par: [4, 4, 5, 3, 4, 5, 3, 4, 4, 4, 5, 4, 3, 4, 4, 3, 5, 4][i],
  hcp: [10, 4, 2, 18, 12, 6, 16, 8, 14, 13, 1, 5, 17, 11, 7, 15, 3, 9][i]
}));