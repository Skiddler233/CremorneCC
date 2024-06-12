import React from "react";
import './Races.css';

export default function Races(){
    return(
        <div className="Races">
            <img className="Heading" src="img/race-times.png" alt="Races" />
            <br />
            <table className="RaceTable">
                <tbody>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Race Type</th>
                    <th>Entry Fee</th>
                </tr>
                <tr>
                    <td>29/07/2024</td>
                    <td>Manly</td>
                    <td>Gravel</td>
                    <td>$67</td>
                </tr>
                <tr>
                    <td>15/09/2024</td>
                    <td>Balmoral</td>
                    <td>XC</td>
                    <td>$29</td>
                </tr>
                <tr>
                    <td>02/011/2024</td>
                    <td>Artarmon</td>
                    <td>Road Race</td>
                    <td>$99</td>
                </tr>
                <tr>
                    <td>21/12/2024</td>
                    <td>Centennial Park</td>
                    <td>Christmas Smash</td>
                    <td>FREE</td>
                </tr>
                </tbody>
            </table>
            <br /><br />
            </div>
            
  );
}