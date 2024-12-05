// File: driverList.tsx
// Author: Jose Maria Amusategui Garcia Peri (jmamus@bu.edu) 03/12/2024
// Description: This file will display all the drivers in the openF1 API.
// It will fetch the data from the API and display it in a list of drivers, using the Drivers component, 
// which we pass the data to.



import styled from 'styled-components';
import Driver from '../interfaces/driver';
import { useEffect, useState } from 'react';
import Drivers from './drivers';
import CircularProgress from '@mui/material/CircularProgress';


//Styling needs to be finished also add Author
const ParentDiv=styled.div`
  width: 100%;
  margin: auto;
`;

export default function DriverList() {
    const [data, setData] = useState<Driver[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API to set overall data
        async function fetchData(): Promise<void> {
        mode: 'no-cors';
        const rawData = await fetch("https://api.openf1.org/v1/drivers?session_key=latest");
        const results: Driver[] = await rawData.json();
        setData(results);
        setLoading(false);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, []);
    
    return (
        <>
            {loading 
        ? 
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <CircularProgress /> 
        </div>

        :
            <ParentDiv>
                <h1>All Drivers</h1>
                <Drivers data={data} />
            </ParentDiv>
        }
        </>
    )
}