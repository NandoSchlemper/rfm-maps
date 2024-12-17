
type RawLocation = [string, number, number];

type Location = {
  key: string;
  name: string;
  lat: number;
  lng: number;
};

const locations: RawLocation[] = [
  ["RFM", -22.4374721, -47.5699381],
  ["Itapeva", -24.163728, -48.904095],
  ["Astral",-24.029804, -48.746858],
  ["Salto", -23.746853, -47.581293],
  ["Mogi", -22.466873, -47.011108],
  ["Tatui Guilherme", -23.403164, -47.918895],
  ["Delta", -22.484859, -47.582310],
]

const formatted: Location[] = locations.map(([name, lat, lng]) => ({
  name,
  lat,
  lng,
  key: JSON.stringify({ name, lat, lng }),
}));

export default formatted;