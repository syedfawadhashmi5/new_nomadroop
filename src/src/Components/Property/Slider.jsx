


import Carousel from 'react-bootstrap/Carousel';
import img from '../../images/add-02.jpg'

const  ImageSlider = () =>  {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000} >
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;