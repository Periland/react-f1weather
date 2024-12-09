import { useParams } from "react-router-dom";
import { Driver, Position, Race } from "../types";
import { useEffect, useState } from "react";
import processPositionData from "../lib/raceResults";
import CircularProgress from '@mui/material/CircularProgress';
import styled from "styled-components";

export default function RaceContent() {
    const {id} = useParams();
    const [race, setRace] = useState<Race | null>(null)
    const [drivers, setDrivers] = useState<String[] | null>(null)
    let urlRace = `https://api.openf1.org/v1/meetings?meeting_key=${id}`
    let urlSession = `https://api.openf1.org/v1/sessions?meeting_key=${id}&session_type=Race`

    // STYLING DONE BY AN (SUE) NGO
    const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #92140c;
    height: 100vh;
    padding: 5%;
    color: #fff8e7;
    width: 50%;
    margin: 1% auto;
    font-family: 'Monaco', sans-serif;
    border-radius: 25px;
    .content-box {

        color: #fff8e7;
        text-align: center;
        padding: 2rem;
        border-radius: 15px;
        width: 60%; 
       
    }

    h2, p {
        margin: 1rem 0;
    }

    ol {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }

    ul {
        background-color: #fff8e7; 
        color: #92140c; 
        text-align: center;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 10px;
       
    }

`;
    const Wrap = styled.div`
        background-color: #fff8e7;
        padding-top: 0.2%;
    `;


    useEffect(() => {
        async function getInfo() {
            //Get data for the specific meeting
            const raceRes = await fetch(urlRace);
            const raceData = await raceRes.json();
            setRace(raceData[0]);

            //Get info for the specific session
            const sessionRes = await fetch(urlSession);
            const sessionData = await sessionRes.json();
            const session = sessionData[0].session_key;

            //Get the position data for the specific session just aquired
            const positionRes = await fetch(`https://api.openf1.org/v1/position?session_key=${session}`);
            const positionData = await positionRes.json();
            //Process the position data to find out the standings of the race
            const driverPositions = processPositionData(positionData)

            //Fetch the driver data and match to the winners of the race
            const driverRes = await fetch(`https://api.openf1.org/v1/drivers?session_key=${session}`);
            const driverData = await driverRes.json();
            const driverList = [];
            for (const pos in driverPositions){
                const d = driverData.find((obj : Driver ) => obj.driver_number === driverPositions[pos]);
                driverList.push(d.full_name);
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
        <Wrap>
        <Div>
            <h2>{race.meeting_name}</h2>
            <p>Country: {race.country_name}</p>
            <p>Date: {race.date_start}</p>
            <h2>Race Results</h2>
            <ol>
                
                {drivers.map((d) => (
                    <ul>{d}</ul>
                ))}
            </ol>
        </Div>
        </Wrap>
    );
}
