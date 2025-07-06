// Mock-tiedosto väylätiedoille
export const holes = Array.from({ length: 18 }, (_, i) => ({
  number: i + 1,
  par: i % 2 === 0 ? 4 : 5,
  hcp: (i % 18) + 1
}));