import { getAllVehicles } from "../api/wrsat/getAllVehicles";
import type { Point } from "../components/ui/Map/markers/vehicles_locations";

const response = await getAllVehicles()

type RawLocation = [string, number, number];

const convertToPoint = ([key, lat, lng]: RawLocation): Point => {
    return { key, lat, lng };
  };

type Location = {
    key: string;
    name: string;
    lat: number;
    lng: number;
  };

export const newDados: RawLocation[] = response.dados.map((veiculo: { placa: string; lat: string; lon: string; }) => [
    veiculo.placa,
    Number.parseFloat(veiculo.lat),
    Number.parseFloat(veiculo.lon)
])

export const vehicleData: Point[] = newDados.map(convertToPoint)

const formatted: Location[] = newDados.map(([name, lat, lng]) => ({
    name,
    lat,
    lng,
    key: JSON.stringify({ name, lat, lng }),
  }));
  
export default formatted