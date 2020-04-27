import React from 'react';
import './Home.css';
import Carousel1 from './Carousel1';
import {Media} from 'react-bootstrap';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Home = () => {
    
    
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css?family=Lemon&display=swap');
            </style>
    <div className="cafe">
    <br />
    <h1>Welcome to Rendezvous Cafe</h1>
    <br />
    <h3>Beverage and Dessert</h3>
        </div>
        <div className="myCafe">
        <Media>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
        </style>
            <img style={{ width:450 , height: 250 }}
                className="mr-5"
                src="https://uploads-ssl.webflow.com/5ad7290ea6722a991ed5e806/5ce38126c09e45a385fcff47_Cover.jpg"
                alt="Cactus"
            />
            <Media.Body>
            <h1>The Rendezvous Cafe</h1>
            <br />
            <h4>
            The Rendezvous Cafe was founded by Ketsiree , Peempos, 
            and Saranyou, opening its first store in 1971 across the street from the historic Kathu Market in Kathu city.
            The three Rendezvous founders had two things in common; they were all coming from academia, and they all loved coffee and tea..
            </h4>
            
            </Media.Body>
        </Media>
        </div>
        <div className="Book1">
        <div align="center"><h1>Recommend</h1></div>
        <br />
        <br />
        </div>

    <CardGroup style={{ margin: 5, padding: 5 }}>
        <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
        <CardImg top width="100%" src="https://www.nespresso.com/ncp/resizer.php?width=1200&height=630&file=uploads%2Frecipes%2Fnespresso-recipes-Americano-by-Nespresso.jpg&token=3ea279dc5d5b0dd2e281af62f4267990" style={{ width: 330, height: 170 }} />
            <CardBody>
                <CardTitle><h4>Americano</h4></CardTitle>
                <CardText>Americano</CardText>
                <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
            </CardBody>
        </Card>

        <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
        <CardImg top width="100%" src="https://gather8.com/wp-content/uploads/2019/09/Espresso1.jpg" style={{ width: 330, height: 170 }} />
            <CardBody>
                <CardTitle><h4>Espresso</h4></CardTitle>
                <CardText>Espresso</CardText>
                <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
        </CardBody>
        </Card>

        <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
        <CardImg top width="100%" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmarquee_large_2x%2Fpublic%2F1558554613%2Ffrench-toast-recipe.jpg%3Fitok%3DUfwyfbZ4" style={{ width: 330, height: 170 }} />
            <CardBody>
                <CardTitle><h4>French Toast</h4></CardTitle>
                <CardText>French Toast make you feel happy</CardText>
                <div ALIGN="RIGHT"><CardText>100 BATH</CardText></div>
            </CardBody>
        </Card>

        <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
        <CardImg top width="100%" src="https://static.wixstatic.com/media/8977f5_e16040a8e726dc083842b302b79ed845.jpg/v1/fill/w_784,h_523,al_c,q_90,usm_0.66_1.00_0.01/8977f5_e16040a8e726dc083842b302b79ed845.webp" style={{ width: 330, height: 170 }} />
            <CardBody>
                <CardTitle><h4>Honey Toast</h4></CardTitle>
                <CardText>Honey Toast</CardText>
                <div ALIGN="RIGHT"><CardText>120 BATH</CardText></div>
            </CardBody>
        </Card>
    </CardGroup>

                <div className="Book2">
                    <div align="center"><h1>Atmosphere</h1></div>
                    <br />
                    <br />
                </div>
            <div className="myCafe1">
                <Carousel1 />
            </div>
    </div>
            
    );
}
    

export default Home;



