import { useEffect, useState, useRef } from "react";
import { useMap, AdvancedMarker } from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";

// Tipagem para os pontos
export type Point = google.maps.LatLngLiteral & { key: string };

type Props = { points: Point[] };

export const CreateVehiclesMarkers = ({ points }: Props) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      // biome-ignore lint/style/noUselessElse: <explanation>
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point) => {
        // Garantir que lat e lng são números
        const lat = Number.parseFloat(point.lat.toString());
        const lng = Number.parseFloat(point.lng.toString());
  
        // Verificar se as coordenadas são válidas
        // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
                  if (isNaN(lat) || isNaN(lng)) {
          console.error(`Invalid coordinates for marker: ${point.key}`);
          return null;
        }
  
        return (
          <AdvancedMarker
            position={{ lat, lng }}
            key={point.key}
            ref={(marker) => setMarkerRef(marker, point.key)}
          >
          </AdvancedMarker>
        );
      })}
    </>
  )};