// File: drivers.tsx
// Author: Jose Maria Amusategui Garcia Peri (jmamus@bu.edu) 03/12/2024
// Description: This file will take the data from the DriverList component and 
// pass it to the SingleDriver component so that it can be displayed in a list of drivers.

import Driver from '../interfaces/driver';
import styled from 'styled-components';
import SingleDriver from './singleDriver';

//Styling needs to be finished also add Author
const AllDriversDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #FFFDD0;
`;

export default function Drivers(props : {data:Driver[] } ) {
    // Set up the data to be passed to the SingleDriver component so that it can be displayed

    console.log(props.data);

    return (
        <AllDriversDiv>
            {
                props.data.map((d: Driver) => (
                    <SingleDriver 
                        key={d.driver_number}
                        full_name={d.full_name}
                        name_acronym={d.name_acronym}
                        driver_number={d.driver_number}
                        headshot_url={d.headshot_url}
                        team_name={d.team_name}
                        team_colour={d.team_colour}
                        broadcast_name={d.broadcast_name}
                    />
                ))
            }
        </AllDriversDiv>
    );

}