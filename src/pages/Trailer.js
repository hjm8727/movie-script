import Carousel from 'react-bootstrap/Carousel';

function Trailer() {
  return (
    <Carousel>
      <Carousel.Item>
        <embed
          className="d-block w-100"
          width="800" height="600" 
          src="https://www.youtube.com/embed/aGhqI3d6toc"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>크리드3</h3>
          <p>크리드 3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <embed
          className="d-block w-100"
          width="800" height="600" 
          src="https://www.youtube.com/embed/7Q70_m-59O8"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>아바타 2</h3>
          <p>아바타 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <embed
          className="d-block w-100"
          width="800" height="600" 
          src="https://www.youtube.com/embed/FuPLLwH4lp4"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>블랙 아담</h3>
          <p>블랙 아담</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Trailer;