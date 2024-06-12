import React from "react";
import Groups from './Groups';
import './Rides.css'
import RidesTable from "./RidesTable";

export default function Rides(){
    return(
        <div className="Rides">
            <img className="Heading" src="img/group-rides.png" />
            <Groups />
            <br /> <br />
            <p className="RideInfo">*ALL RIDES BEGIN AND END AT THE CAFE IN CENTENNIAL PARK*</p>
            <RidesTable />
            <br /><br />
        </div>
    )
}