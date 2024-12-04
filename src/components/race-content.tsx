import { useParams } from "react-router-dom";
import { Position, Race } from "../types";
import { useEffect, useState } from "react";

export default function RaceContent() {
    const {id} = useParams();
    const [race, setRace] = useState<Race | null>(null)
    const [session, setSession] = useState<Number | null>(null)
    const [position, setPosition] = useState<Position[] | null>(null)
    let urlRace = `https://api.openf1.org/v1/meetings?meeting_key=${id}`
    let urlSession = `https://api.openf1.org/v1/sessions?meeting_key=${id}&session_type=Race`
    let urlPosition = `https://api.openf1.org/v1/position?session_key=${session}`;

    useEffect(() => {
        async function getInfo() {
            const raceRes = await fetch(urlRace);
            const raceData = await raceRes.json();
            setRace(raceData[0]);
            console.log("race: ", raceData)

            const sessionRes = await fetch(urlSession);
            const sessionData = await sessionRes.json();
            setSession(sessionData[0].session_key);
            console.log("session: ", sessionData)

            const positionRes = await fetch(urlPosition);
            const positionData = await positionRes.json();
            setPosition(positionData);
            console.log("position: ", positionData)
        }
        getInfo();
    }, []);

    return !(position && race && session) ?(
        <h1>Loading...</h1>
        ) : (
        <div>
            <h2>{race.meeting_name}</h2>
            <p>Country: {race.country_name}</p>
            <p>Date: {String(race.date_start)}</p>
            {position.map((p) => (
                <p>{p.position}</p>
            ))}
        </div>
    );
}