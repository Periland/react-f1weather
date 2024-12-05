//File: singleDriver.tsx
//Author: Jose Maria Amusategui Garcia Peri (jmamus@bu.edu) 03/12/2024
//Description: This file will be used to display a single driver in the openF1 API.
//It will take the driver data passed from Drivers and display it in a styled component.
//It will also have a link to the driverDetail component, which will display more information about the driver.

import Driver from '../interfaces/driver';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Styling needs to be finished also add Author
const SingleDriverDiv=styled.div<{team_colour: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 15%;
    height: 100%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>("#" + props.team_colour)};
    color: black;
    border: 1px solid black;
    text-align: center;
    align-items: center;
    
`;

export default function SingleDriver(props:Driver){
    // Set up the data to be passed to the SingleDriver component so that it can be displayed
    // Also set up the Link tag to link to the driverDetail component page for that driver
    const url = props.headshot_url ? props.headshot_url.slice(0, -25) : "";
    
    return (
        
        <SingleDriverDiv team_colour={props.team_colour}>
            <h2>{props.name_acronym} {props.driver_number}</h2>
            <h3>{props.broadcast_name}</h3>
            <img src={url} alt={props.full_name} width={250} />
            <Link to={`/driver/${props.name_acronym}`}>
            <p>{props.full_name}</p>
            </Link>
            <p>{props.team_name}</p>
        </SingleDriverDiv>
    );  
}