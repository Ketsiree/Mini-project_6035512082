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
            <h3>บรรยากาศภายใน</h3>
            <p>บรรยากาศภายในมีโซฟานุ่มๆ นั่งสบายไฟ Warm light ทำให้บรรยากาศน่านั่ง</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img style={{ margin:5, padding:5,width: 1000, height: 500 }}
            className="d-block w-100"
            src="https://iberrywifisecurity.com/wp-content/uploads/2017/09/cafe-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>บรรยากาศอีกฝั่ง</h3>
            <p>บาร์หน้าเคาร์เตอร์สำหรับคนมานั่งเดี่ยวๆ ชิลๆได้ มีโต๊ะที่หน้าร้านแบบ Outdoor</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ margin:5, padding:5,width: 1000, height: 500 }}
            className="d-block w-100"
            src="https://img2.goodfon.com/wallpaper/nbig/a/9e/kofe-knigi-ochki.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>กาแฟและหนังสือ</h3>
            <p>บรรยากาศภาในร้านสามารถนั่งทำงานได้ทั้งในและนอกร้าน กาแฟสักแก้ว หนังสือสักเล่ม ก็ชิลดีเหมือนกัน</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>
  );
}


export default Carousel1;