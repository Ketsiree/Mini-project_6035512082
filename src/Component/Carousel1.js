import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousel1 = () => {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img style={{ margin:5, padding:5,width: 1000, height: 500 }}
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/41593.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img style={{ margin:5, padding:5,width: 1000, height: 500 }}
            className="d-block w-100"
            src="https://iberrywifisecurity.com/wp-content/uploads/2017/09/cafe-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ margin:5, padding:5,width: 1000, height: 500 }}
            className="d-block w-100"
            src="https://img2.goodfon.com/wallpaper/nbig/a/9e/kofe-knigi-ochki.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>
  );
}


export default Carousel1;