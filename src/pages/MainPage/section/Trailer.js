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
        <embed className="d-block w-100" width="800px" height="685px" src="https://www.youtube.com/embed/ku9l1fHo5XE" alt="xxx"/>
        <Carousel.Caption>
          <h3>블랙 팬서: 와칸다 포에버</h3>
          <p>Black Panther: Wakanda Forever</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed className="d-block w-100" width="800px" height="685px" src="https://www.youtube.com/embed/tgPuhRNoROs" alt="xxx"/>
        <Carousel.Caption>
          <h3>원피스 필름 레드</h3>
          <p>ONE PIECE FILM RED</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed className="d-block w-100" width="800px" height="685px" src="https://www.youtube.com/embed/VRWhQSTayA0" alt="xxx"/>
        <Carousel.Caption>
          <h3>블랙 사이트</h3>
          <p>Black Site</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
        <embed className="d-block w-100" width="800px" height="685px" src="https://www.youtube.com/embed/aGhqI3d6toc" alt="xxx"/>
        <Carousel.Caption>
          <h3>크리드 3</h3>
          <p>Creed : 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Trail>
  );
}

export default Trailer;