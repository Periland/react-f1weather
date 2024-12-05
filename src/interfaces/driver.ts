//File: driver.ts
//Author: Jose Maria Amusategui Garcia Peri (jmamus@bu.edu) 03/12/2024
//Description: This file will be used to define the driver interface that
// will be used to display info about the drivers in the OpenF1 API.

export default interface Driver {
    full_name: string;
    name_acronym: string;
    driver_number: number;
    headshot_url: string;
    team_name: string;
    team_colour: string;
    broadcast_name: string;
}