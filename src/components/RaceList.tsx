import { useEffect, useState } from "react";
import styled from "styled-components";
import { Race } from "../types";

export default function RaceList() {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    async function getRaces() {
      const res = await fetch(
        `https://api.openf1.org/v1/meetings`
      );
      const data = await res.json();
      setRaces(data.data);
    }
    getRaces();
  });

  const RacesPreviewDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: lightblue;
  `;

  const RacePreview = ({ race }: { race: Race }) => {
    return (
      <RacesPreviewDiv>
        <h3>{race.meeting_name}</h3>
        <p>{race.location}</p>
        <p>{race.country_name}</p>
      </RacesPreviewDiv>
    );
  };

  return (
    <div>
      <div>
        {races.map((race) => (
          <RacePreview race={race} />
        ))}
      </div>
    </div>
  );
}
