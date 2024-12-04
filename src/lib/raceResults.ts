import { Position } from "../types";


export default function processPositionData(positionData: Position[]) {
    const finalPositions: Record<number, number> = {};
    
    positionData.forEach((p) => {
        finalPositions[p.position] = p.driver_number;
    })
    
    console.log("in function: ", JSON.stringify(finalPositions))
    return finalPositions;
}