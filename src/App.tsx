import { useEffect, useState } from "react";
import IncidentMap from "./components/IncidentMap";

type IncidentDTO = {
    latitude: number;
    longitude: number;
    risk: boolean;
};

export default function App() {
    const [incidents, setIncidents] = useState<IncidentDTO[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/")
            .then(res => res.json())
            .then(data => setIncidents(data));
    }, []);

    return (
        <div>

            <IncidentMap incidents={incidents}></IncidentMap>

        </div>
    );
}

