import Carousel from 'react-bootstrap/Carousel';
import trailer from '../styles/Trailer.css';

function Trailer() {
  return (
    <Carousel style={{width: '85%', margin: '5px auto', borderRadius: '10px', backgroundColor: 'rgb(255, 235, 59)', padding: '30px', boxSizing: 'borderBox', height: '100%'}}>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed
          className="d-block w-100"
          width="800px" height="685px" 
          src="https://www.youtube.com/embed/Dlfp3K11C_o"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>토르 : 러브 앤 썬더</h3>
          <p>Thor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed
          className="d-block w-100"
          width="800px" height="685px" 
          src="https://www.youtube.com/embed/aGhqI3d6toc"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>크리드3</h3>
          <p>크리드 3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed
          className="d-block w-100"
          width="800px" height="685px" 
          src="https://www.youtube.com/embed/7Q70_m-59O8"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>아바타 2</h3>
          <p>아바타 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed
          className="d-block w-100"
          width="800px" height="685px" 
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