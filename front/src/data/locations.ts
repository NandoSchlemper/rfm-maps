
type RawLocation = [string, number, number];

type Location = {
  key: string;
  name: string;
  lat: number;
  lng: number;
};

const locations: RawLocation[] = [
  ["RFM", -22.4374721, -47.5699381],
]

const formatted: Location[] = locations.map(([name, lat, lng]) => ({
  name,
  lat,
  lng,
  key: JSON.stringify({ name, lat, lng }),
}));

export default formatted;