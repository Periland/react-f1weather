//File: driverDetail.tsx
//Author: Jose Maria Amusategui Garcia Peri (jmamus@bu.edu) 03/12/2024
//Description: This file will be used to display extra information for 
//single f1 driver using two different F1 APIs, linking the information for both
//of these in order to display as much data as possible.

import { useEffect, useState } from "react";
import Driver from "../interfaces/driver";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import DriverData from "../interfaces/driverData";


// Styling done by An (Sue) Ngo
const Div = styled.div`
  background-color: #fff8e7;
  padding-top:0.2%;
`
const DriverDetailDiv = styled.div<{ team_colour: string }>`
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Monaco', sans-serif;
    background-color: ${(props) => "#" + props.team_colour};
    color: #fff;
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 60%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

    img {
        margin: 1rem auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: gold;
        
    }

    p {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        line-height: 1.5;
       
        text-align: center;
    }

    a {
    
        text-decoration: none;
        font-weight: bold;
          
        
    }

 
`;

  
export default function DriverDetail() {
    const {id} = useParams(); 
    console.log(id);

    const [driver, setDriver] = useState<DriverData | null>(null);

    const [data, setData] = useState<Driver[]>([]);

    const [position, setPosition] = useState("");

    const [points, setPoints] = useState("");

    const [wins, setWins] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API to set overall data and then two other APIs to get
        // even more driver data, such as championship standings, also linking both versions
        // of the driver with each other
        async function fetchData(): Promise<void> {
          try {
            const rawData = await fetch("https://ergast.com/api/f1/current/drivers.json");
            const results = await rawData.json();
    
            const drivers: DriverData[] = results.MRData.DriverTable.Drivers;
    
            const foundDriver = drivers.find((driver: DriverData) => driver.code === String(id));
    
            if (foundDriver) {
              setDriver(foundDriver);
              
                console.log("id: " + foundDriver.driverId);
              fetchStandingsData(foundDriver.driverId)
                .then(() => console.log("Standings fetched successfully"))
                .catch((e: Error) => console.log("There was an error: " + e))
                ;
            } else {
              console.log(`Driver with code ${id} not found.`);
              setDriver(null);
            }
          } catch (e) {
            console.log("There was an error: " + e);
          }
        }
    
        fetchData()
          .then(() => console.log("Data fetched successfully"))
          .catch((e: Error) => console.log("There was an error: " + e));

        async function fetchOpenData(): Promise<void> {
        mode: 'no-cors';
        const rawData = await fetch("https://api.openf1.org/v1/drivers?session_key=latest");
        const results: Driver[] = await rawData.json();
        setData(results);
        setLoading(false);
        }
        fetchOpenData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));

        async function fetchStandingsData(driver_id: string): Promise<void> {
            mode: 'no-cors';
            const rawData = await fetch(`https://ergast.com/api/f1/current/drivers/${driver_id}/driverStandings.json`)
            const results = await rawData.json();
            console.log(results);

            const pos = results.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position;
            console.log(pos)
            setPosition(pos);
            const poi = results.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points;
            setPoints(poi);
            const w = results.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].wins;
            setWins(w);
            }
      }, [id]);

    const openDriver = data.find((driver: Driver) => driver.name_acronym === id);
    
    // Set the team colour to red if there is no team colour, 
    // two drivers from the openF1 API have no team colour
    var team_colour = openDriver?.team_colour;
    if (!openDriver?.team_colour) {
        team_colour = "FF0000";
    }

    // Set the url to the headshot of the driver, 
    // need to trim to get full resolution
    const url = openDriver?.headshot_url ? openDriver?.headshot_url.slice(0, -25) : "";

  return (
    <>
    {loading 
        ?
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <CircularProgress /> 
        </div>
        :
        //styling and made to display name and "API does not have this info" done by An (Sue) Ngo
      <Div>
   <DriverDetailDiv team_colour={team_colour}>
      <h1>{openDriver?.full_name} </h1>
        <img src={url} alt={openDriver?.full_name ?? "No Image Available"} width={420} />
        <p>Current Number: {openDriver?.driver_number === driver?.permanentNumber ? "N/A" : openDriver?.driver_number ?? "API does not have this information"}</p>
        <p>Permanent Number: {driver?.permanentNumber ?? "API does not have this information"}</p>
        <p>Driver Code: {driver?.code ?? "API does not have this information"}</p>
        <p>Wikipedia page: {driver?.url ? <a href={driver?.url} target="_blank">{driver?.url}</a> : "API does not have this information"}</p>
        <p>Given Name: {driver?.givenName ?? "API does not have this information"}</p>
        <p>Family Name: {driver?.familyName ?? "API does not have this information"}</p>
        <p>Date of Birth: {driver?.dateOfBirth ?? "API does not have this information"}</p>
        <p>Nationality: {driver?.nationality ?? "API does not have this information"}</p>
        <p>Team: {openDriver?.team_name ?? "API does not have this information"}</p>
        <p>Championship Standings:</p>
        <p>Position: {position ?? "API does not have this information"}</p>
        <p>Points: {points ?? "API does not have this information"}</p>
        <p>Wins: {wins ?? "API does not have this information"}</p>
        </DriverDetailDiv>
        </Div>
    }
    </>
  );
}