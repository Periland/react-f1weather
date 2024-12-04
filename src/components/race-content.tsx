import { useParams } from "react-router-dom";
import { Position, Race } from "../types";
import { useEffect, useState } from "react";
import processPositionData from "../lib/raceResults";
import CircularProgress from '@mui/material/CircularProgress';

export default function RaceContent() {
    const {id} = useParams();
    const [race, setRace] = useState<Race | null>(null)
    const [drivers, setDrivers] = useState<String[] | null>(null)
    let urlRace = `https://api.openf1.org/v1/meetings?meeting_key=${id}`
    let urlSession = `https://api.openf1.org/v1/sessions?meeting_key=${id}&session_type=Race`

    useEffect(() => {
        async function getInfo() {
            const raceRes = await fetch(urlRace);
            const raceData = await raceRes.json();
            setRace(raceData[0]);
            console.log("race: ", raceData)

            const sessionRes = await fetch(urlSession);
            const sessionData = await sessionRes.json();
            const session = sessionData[0].session_key;
            console.log("session: ", sessionData)

            const positionRes = await fetch(`https://api.openf1.org/v1/position?session_key=${session}`);
            const positionData = await positionRes.json();
            const driverPositions = processPositionData(positionData)
            console.log("pre driver name: ", JSON.stringify(driverPositions))

            const driverList = [];
            for (const pos in driverPositions){
                const driverRes = await fetch(`https://api.openf1.org/v1/drivers?driver_number=${driverPositions[pos]}`);
                const driverData = await driverRes.json();
                driverList.push(driverData[0].full_name);
            }
            setDrivers(driverList);
        }
        getInfo();
    }, []);


    return !(drivers && race) ?(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <CircularProgress />
        </div>
        ) : (
        <div>
            <h2>{race.meeting_name}</h2>
            <p>Country: {race.country_name}</p>
            <p>Date: {race.date_start}</p>
            <ol>
                {drivers.map((d) => (
                    <li>{d}</li>
                ))}
            </ol>
        </div>
    );
}
