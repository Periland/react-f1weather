//File: RaceList.tsx
//Author: Awad Khawaja (awadk@bu.edu)
//Description: This file will be used to display all races 
//for the f1 season and link each race to more information
//about the race in the race-content page
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Race } from "../types";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function RaceList() {
    const [loading, setLoading] = useState(true);
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
      // on page load we will get all the races from the api
    async function getRaces() {
      const res = await fetch(
        `https://api.openf1.org/v1/meetings`
      );
      const data = await res.json();
        //Once we get the data we set loading to false and set the data to races
      setRaces(data);
      setLoading(false);
    }
    getRaces();
  }, []);
  // STYLING DONE BY AN (SUE) NGO
  const RacesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); 
  gap: 1rem; /* Spacing between the items */
  font-family: 'Monaco', sans-serif;
  padding: 0.5rem;
  background-color: #92140c;
  
`;
  const RacesPreviewDiv = styled.div`
    margin: 0.25rem;
    padding: 0.25rem;
    width: 20rem;
    border-radius: 10px;
    display: block;
  font-family: 'Monaco', sans-serif;
    justify-content: space-evenly;
    background-color: #fff8e7;

  
  
  `;

  const RacePreview = ({ race }: { race: Race }) => {
      //Each race will follow this format so each card looks the same and we can just map it to this
    const date = new Date(race.date_start);
    return (
            <RacesPreviewDiv>
              <h3><Link to={`/race/${race.meeting_key}`}>{race.meeting_name}</Link></h3>
              <p>Date: 
                {date.toLocaleDateString("en-US", 
                    {
                        weekday: "long", 
                        year: "numeric", 
                        month: "long", 
                        day: "numeric",})}
                </p>
              <p>{race.location}, {race.country_name}</p>
            </RacesPreviewDiv>
    );
  };

  return (
    <div>
        {loading 
        ? 
        <div style={{display: "flex", flexFlow: "row-wrap",justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <CircularProgress /> 
        </div>
        : 
        <RacesContainer>
            {races.map((race) =>
              !race.meeting_name.includes("Testing") && (
                <RacePreview key={race.meeting_key} race={race} />
              )
            )}
        </RacesContainer>}
    </div>
  );
}
