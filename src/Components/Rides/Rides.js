import React from "react";
import Groups from './Groups';
import './Rides.css'
import RidesTable from "./RidesTable";
import GRides from '../../Assets/img/group-rides.png'

export default function Rides(){
    return(
        <div id='group-rides' className="Rides">
            <img className="Heading" src={GRides} alt="Group Rides Heading"/>
            <Groups />
            <br /> <br />
            <p className="RideInfo">*ALL RIDES BEGIN AND END AT THE CAFE IN CENTENNIAL PARK*</p>
            <RidesTable />
            <br /><br />
        </div>
    )
}