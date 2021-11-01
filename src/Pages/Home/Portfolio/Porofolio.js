import React from 'react';
import { Carousel } from 'react-bootstrap';


const Porofolio = () => {
    return (
        <div>
            <h2 className="text-center text-bold p-5"> Portfolio</h2>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Amazing Nature</h3>
      <p>Travel & Enjoy</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://t3.ftcdn.net/jpg/02/90/05/50/360_F_290055018_wlqdL0vQ6bJ2wijZCc33xjLUq3zQsuSf.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Beauty of Nature</h3>
      <p>For refresshment of mind</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://t3.ftcdn.net/jpg/02/90/05/50/360_F_290055018_wlqdL0vQ6bJ2wijZCc33xjLUq3zQsuSf.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Tours $ Travel</h3>
      <p>Keep in mind a glorius momment</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Porofolio;