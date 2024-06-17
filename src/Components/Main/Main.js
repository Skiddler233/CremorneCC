// import Images and CSS 
import React from 'react'
import './Main.css'
import Weather from './Weather'
import Carousel from '../Carousel/Carousel';
import About from '../../Assets/img/about_us.png';
import Rider from '../../Assets/img/rider.jpg';
import Ebike from '../../Assets/img/ebike.jpg';
import Gravel from '../../Assets/img/gravel-bike.jpg';


export default function Main() {
    // Carousel Items - Images to be displayed
    const items = [
        <img src={Rider} alt='Rider'/>,
        <img src={Ebike} alt='Rider with Ebikes'/>,
        <img src={Gravel} alt='Gravel Bike'/>
    ];
    return(
        <div id="home" className='Main-Container'>
            <div className='Left-Space'>
                <img className='Heading' src={About} alt='Heading Title'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel placerat leo. Aenean efficitur elit vitae tellus 
                vulputate, vitae suscipit risus tincidunt. Donec tristique, quam vitae viverra pellentesque, augue dui iaculis ligula, non gravida massa dolor et diam. Duis sed mauris odio. 
                Vestibulum blandit venenatis dapibus. Phasellus non tincidunt ex, a efficitur augue. Quisque imperdiet posuere augue. Vivamus non enim urna. Vivamus scelerisque at purus ac fringilla.
              
                </p>
                </div>
                <div className='Center-Space'>
                    <Carousel items={items} />
                </div>
                <div className='Right-Space'>
                    <Weather />
                </div>
            
        </div>
    )
};