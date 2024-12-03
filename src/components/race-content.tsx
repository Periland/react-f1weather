import { useParams } from "react-router-dom";
import { Race } from "../types";
import { useEffect, useState } from "react";

export default function RaceContent() {
    const {id} = useParams();
    const [race, setRace] = useState<Race | null>(null)
    let url = `https://api.openf1.org/v1/meetings?meeting_key=${id}`

    useEffect(() => {
        async function getRaceInfo() {
            const res = await fetch(url);
            const data = await res.json();
            setRace(data[0])
        }
        getRaceInfo();
    }, []);

    return !race ?(
        <h1>Loading...</h1>
        ) : (
        <div>
            <h2>{race.meeting_name}</h2>
            <p>Country: {race.country_name}</p>
            <p>Date: {String(race.date_start)}</p>
        </div>
    );
}