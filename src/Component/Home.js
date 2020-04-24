import React from 'react';
//import firebase from 'firebase/app';
import './Home.css';
import Carousel1 from './Carousel1';
import {Media,Card} from 'react-bootstrap';

const Home = () => {
    
    
    return (
        <div>
    <div className="cafe">
    <br />
    <h1>Welcome to My Cafe</h1>
    <h2>Beverage and Dessert</h2>
    <br />
    </div>
        <div className="myCafe">
        <Media>
            <img style={{ width:450 , height: 250 }}
                className="mr-5"
                src="https://pbs.twimg.com/media/DPhXIjVUQAEvwa6.jpg"
                alt="Cactus"
            />
            <Media.Body>
            <h1>Media Heading</h1>
            <h2>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
            </h2>
            
            </Media.Body>
        </Media>
        </div>

        <div className="myCafe">
        <Media>
            <img style={{ width:450 , height: 250 }}
                className="mr-5"
                src="https://pbs.twimg.com/media/DPhXIjVUQAEvwa6.jpg"
                alt="Cactus"
            />
            <Media.Body>
            <h1>Media Heading</h1>
            <h2>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
            </h2>
            
            </Media.Body>
        </Media>
        </div>

        <Card className="bg-light text-white">
                <Card.Img style={{ width:1900,height:270}} src="https://wallpaperaccess.com/full/277719.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
        </Card>

            <div className="myCafe1">
                <Carousel1 />
            </div>
       </div> 
    );
}
    

export default Home;



