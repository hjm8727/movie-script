import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Trail = styled.div`
.carousel-indicators {
    visibility: hidden;
}
`;

function Trailer() {
    const [Trailer, setTrailer] = useState('')

    useEffect(() => {
        const nowTrailer = `http://cokebear756.synology.me:62322/api/movie/505642`;
        FetchTrailer(nowTrailer)
    }, [])

    const FetchTrailer = (nowTrailer) => {
        fetch(nowTrailer, {
            method : "POST",
            body: JSON.stringify(Trailer)
        })
        .then(res => res.json())
        .then(res => {
            setTrailer(Trailer,res.results) 
            // console.log(res.results)
        })
    }
  return (
    <Trail>
    <Carousel style={{width: '85%', margin: '5px auto', borderRadius: '10px', backgroundColor: '#FFD369', padding: '30px', boxSizing: 'borderBox', height: '100%'}}>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed className="d-block w-100" width="800px" height="685px" src="https://www.youtube.com/embed/_Z3QKkl1WyM" alt="First slide"/>
        <Carousel.Caption>
          <h3>토르 : 러브 앤 썬더</h3>
          <p>Thor</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
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
      </Carousel.Item> */}
    </Carousel>
    </Trail>
  );
}

export default Trailer;