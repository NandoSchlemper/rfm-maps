// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { CreateCustomMarker } from "../customPin";

const google_api = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
console.log(google_api)

export const MapComponent = () => {
    return (
        <APIProvider apiKey={google_api}>
            <Map
                mapId={"rfm_maps"}
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{lat: -22.4376945, lng: -47.5707398}}
                defaultZoom={10}
                gestureHandling={'greedy'}
            />
            <CreateCustomMarker />
        </APIProvider>
    )
}