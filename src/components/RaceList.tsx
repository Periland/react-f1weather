import { useEffect, useState } from "react";
import styled from "styled-components";
import { Race } from "../types";
import { Link } from "react-router-dom";

export default function RaceList() {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    async function getRaces() {
      const res = await fetch(
        `https://api.openf1.org/v1/meetings`
      );
      const data = await res.json();
      setRaces(data);
    }
    getRaces();
  }, []);

  const RacesPreviewDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: lightblue;
  `;

  const RacePreview = ({ race }: { race: Race }) => {
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
      <div>
        {races.map((race) =>
          !race.meeting_name.includes("Testing") && (
            <RacePreview key={race.meeting_key} race={race} />
          )
        )}
      </div>
    </div>
  );
}
