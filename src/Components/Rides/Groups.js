import React from 'react';
import './Groups.css'

export default function Groups() {
  return (
    <div className='Groups'>
    <table >
      <tbody>
        <tr>
          <td colSpan={6}>
            <img className='Groups-Header' src='img/groups.png' />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <img className='Letters' src='img/group-a.png' />
          </td>
          <td colSpan={2}>
            <img className='Letters' src='img/group-b.png' /> 
          </td>
          <td colSpan={2}>
            <img className='Letters' src='img/group-c.png' />
          </td>
        </tr>
        <tr>
          <td className='Group-A'>
            <img src='img/lightning.png' />
          </td>
          <td className='Group-A'>Fastest Group <br /> Expect speeds of 45km/h+ on the flat. <br /> This is a Drop group. Make sure you can keep up.</td>
          <td className='Group-B'>
          <img src='img/smile.png' />
          </td>
          <td className='Group-B'>Moderate Group <br /> Expect speeds of 30km/h+ on the flat. <br /> This is a NO Drop group. A group Leader will make sure everyone makes it. </td>
          <td className='Group-C'>
          <img src='img/coffee.png' />
          </td>
          <td className='Group-C'>Easy Group <br /> Expect speeds of 20km/h+ on the flat. <br /> This is a casual group. Go out, make some friends and have fun. </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
