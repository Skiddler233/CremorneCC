import React from 'react'
import './Main.css'
import Weather from './Weather'
import Carousel from '../Carousel/Carousel'


export default function Main(){
    const items = [
        <img src='img/rider.jpg' />,
        <img src='img/ebike.jpg' />,
        <img src='img/gravel-bike.jpg' />
    ]
    return(
        <div className='Main-Container'>
            <div className='Left-Space'>
                <img className='Heading' src='img/about_us.png' />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel placerat leo. Aenean efficitur elit vitae tellus 
                vulputate, vitae suscipit risus tincidunt. Donec tristique, quam vitae viverra pellentesque, augue dui iaculis ligula, non gravida massa dolor et diam. Duis sed mauris odio. 
                Vestibulum blandit venenatis dapibus. Phasellus non tincidunt ex, a efficitur augue. Quisque imperdiet posuere augue. Vivamus non enim urna. Vivamus scelerisque at purus ac fringilla.
                <br /><br />
                Etiam tempor est at urna gravida, vitae luctus elit ultrices. Integer vestibulum velit non risus fringilla maximus. Praesent ac eros eu neque finibus ornare quis nec nulla. Maecenas aliquam, felis id vulputate pretium,
                 felis neque dignissim mi, vel tempor nunc mi vitae justo. Nulla ac accumsan ipsum, vel elementum dolor. Curabitur vel consequat velit, eget finibus nisl. Vestibulum augue risus, lobortis ut efficitur vitae, ullamcorper at est. 
                 Phasellus quis nisl sem. Sed at ultrices magna. Vivamus condimentum magna id risus tempor vehicula. Curabitur dapibus eros non viverra cursus. Nullam erat ligula, tincidunt in eleifend ut, interdum in eros. Pellentesque 
                 facilisis placerat tellus, in mattis lectus luctus id. Praesent id tincidunt mi. Nulla sollicitudin leo auctor massa pretium, non aliquet lectus finibus.
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