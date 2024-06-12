import React from 'react';
import './RidesTable.css';

export default function RidesTable() {
  const ridesData = [
    { day: "Monday", groupA: ["6:00 AM", "2:00 PM"], groupB: ["7:00 AM", "3:00 PM"], groupC: ["8:00 AM", "N/A"] },
    { day: "Tuesday", groupA: ["N/A", "1:00 PM"], groupB: ["7:00 AM", "N/A"], groupC: ["8:00 AM", "4:00 PM"] },
    { day: "Wednesday", groupA: ["6:00 AM", "2:00 PM"], groupB: ["7:00 AM", "3:00 PM"], groupC: ["8:00 AM", "5:00 PM"] },
    { day: "Thursday", groupA: ["6:00 AM", "1:00 PM"], groupB: ["N/A", "3:00 PM"], groupC: ["8:00 AM", "4:00 PM"] },
    { day: "Friday", groupA: ["6:00 AM", "N/A"], groupB: ["7:00 AM", "3:00 PM"], groupC: ["8:00 AM", "5:00 PM"] },
    { day: "Saturday", groupA: ["7:00 AM", "2:00 PM"], groupB: ["8:00 AM", "4:00 PM"], groupC: ["9:00 AM", "5:00 PM"] },
    { day: "Sunday", groupA: ["7:00 AM", "3:00 PM"], groupB: ["8:00 AM", "4:00 PM"], groupC: ["N/A", "5:00 PM"] },
  ];

  return (
    <table className="RidesTable">
      <tbody>
        <tr>
          <td colSpan="7">
            <img className="TableHeader" src="img/ride-times.png" alt="Ride Times" />
          </td>
        </tr>
        <tr>
          <th className="Coloured"></th>
          <th className="Coloured" colSpan="2">Group A</th>
          <th className="Coloured" colSpan="2">Group B</th>
          <th className="Coloured" colSpan="2">Group C</th>
        </tr>
        <tr>
          <td className="Coloured"></td>
          <td>Morning</td>
          <td>Afternoon</td>
          <td>Morning</td>
          <td>Afternoon</td>
          <td>Morning</td>
          <td>Afternoon</td>
        </tr>
        {ridesData.map((ride, index) => (
          <tr key={index}>
            <td className="Coloured">{ride.day}</td>
            {ride.groupA.map((time, idx) => (
              <td key={`groupA-${idx}`} style={{ backgroundColor: time === 'N/A' ? 'red' : 'transparent' }}>{time}</td>
            ))}
            {ride.groupB.map((time, idx) => (
              <td key={`groupB-${idx}`} style={{ backgroundColor: time === 'N/A' ? 'red' : 'transparent' }}>{time}</td>
            ))}
            {ride.groupC.map((time, idx) => (
              <td key={`groupC-${idx}`} style={{ backgroundColor: time === 'N/A' ? 'red' : 'transparent' }}>{time}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
