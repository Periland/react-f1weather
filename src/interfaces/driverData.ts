//File: driver.ts
//Author: Jose Maria Amusategui Garcia Peri (jmamus@bu.edu) 03/12/2024
//Description: This file will be used to define the driver interface that
// will be used to display info about the drivers in the Ergast F1 API.

export default interface DriverData {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
  }