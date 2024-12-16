// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { env } from "../../utils/env";

const google_api = env.GOOGLE_MAPS_API_KEY

export function MapComponent() {
    return (
        <APIProvider apiKey={google_api}>
            <Map
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{lat: -22.4376945, lng: -47.5707398}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
        </APIProvider>
    )
}