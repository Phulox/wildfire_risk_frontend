import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type IncidentDTO = {
    latitude: number;
    longitude: number;
    risk: boolean;
};

type Props = {
    incidents: IncidentDTO[];
};

export default function IncidentMap({ incidents }: Props) {

    //setting world map bounds only
    const SOUTH_WEST: L.LatLngTuple = [90, 180];
    const NORTH_EAST: L.LatLngTuple = [-90, -180];
    const maxBounds: L.LatLngBoundsExpression = [SOUTH_WEST, NORTH_EAST];

    return (

        <MapContainer
            center={[40, -95]}
            zoom={5}
            style={{ height: "100vh", width: "100%" }}
            minZoom={3}
            maxBounds={maxBounds}

        >
        <TileLayer
        url = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {incidents.map((i, idx) => (
            <CircleMarker
                    key={idx}
            center={[i.latitude, i.longitude]} radius = {i.risk ? 8 : 5} //high = 8, low = 5
            pathOptions={{ color: i.risk ? "red" : "green" }}>
    <Popup>
        Risk: {i.risk ? "HIGH" : "LOW"}
    </Popup>
    </CircleMarker>
))}
    </MapContainer>
);
}
