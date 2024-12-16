import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export function CreateCustomMarker() {
    return (
        <AdvancedMarker position={{lat: -22.4376945, lng: -47.5707398}}>
            <Pin
                background={'#0f9d58'}
                borderColor={'#006425'}
                glyphColor={'#60d98f'}
            />
        </AdvancedMarker> // Just a green marker
    )
}