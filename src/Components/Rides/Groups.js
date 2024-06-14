// Import CSS and Images
import React from 'react';
import './Groups.css'
import GroupsHeading from '../../Assets/img/groups.png';
import GroupA from '../../Assets/img/group-a.png';
import GroupB from '../../Assets/img/group-b.png';
import GroupC from '../../Assets/img/group-c.png';
import Lightning from '../../Assets/img/lightning.png'
import Smile from '../../Assets/img/smile.png';
import Coffee from '../../Assets/img/coffee.png';

export default function Groups() {
  return (
    <div className='Groups'>
    <table >
      <tbody>
        <tr>
          <td colSpan={6}>
            <img className='Groups-Header' src={GroupsHeading} alt='Groups Text'/>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <img className='Letters' src={GroupA} alt='Letter A'/>
          </td>
          <td colSpan={2}>
            <img className='Letters' src={GroupB} alt='Letter B'/> 
          </td>
          <td colSpan={2}>
            <img className='Letters' src={GroupC} alt='Letter C'/>
          </td>
        </tr>
        <tr>
          <td className='Group-A'>
            <img className='A-Image' src={Lightning} alt='Lightning Bolt'/>
          </td>
          <td className='Group-A'>Fastest Group <br /> Expect speeds of 45km/h+ on the flat. <br /> This is a Drop group. Make sure you can keep up.</td>
          <td className='Group-B'>
          <img className='B-Image' src={Smile} alt='Smile Icon'/>
          </td>
          <td className='Group-B'>Moderate Group <br /> Expect speeds of 30km/h+ on the flat. <br /> This is a NO Drop group. A group Leader will make sure everyone makes it. </td>
          <td className='Group-C'>
          <img className='C-Image' src={Coffee} alt='Coffee Icon'/>
          </td>
          <td className='Group-C'>Easy Group <br /> Expect speeds of 20km/h+ on the flat. <br /> This is a casual group. Go out, make some friends and have fun. </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
