"use client";

import {
  APIProvider,
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  Map,
} from "@vis.gl/react-google-maps";
import locations from "../../../data/locations";
import { RenderStaticPositions } from "./markers/static_locations";

export default function Intro() {
  return (
    <div style={{position: "relative",
                width: "100vw",
                top: "10",
                height: "60vh",
                marginLeft: "auto",
                marginRight: "auto",
                color: "ivory"}
    }>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            defaultCenter={{ lat: -22.43, lng: -47.56 }}
            defaultZoom={10}
            mapId={"rfm"}
          >
            <RenderStaticPositions points={locations} />
          </Map>
        </APIProvider>
      </div>
    </div>
  );
}

