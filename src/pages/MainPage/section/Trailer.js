// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ReactPlayer from 'react-player/youtube';
// import styled from 'styled-components';

// const Trail = styled.div`
// .carousel-indicators {
//     visibility: hidden;
// }
// `;

// function Trailer(props) {
//     const [Trailer, setTrailer] = useState('')
//     const [Trailer2, setTrailer2] = useState('')
//     const [Trailer3, setTrailer3] = useState('')
//     const [Trailer4, setTrailer4] = useState('')
//     const [data, setData] = useState('');
//     if(props.id){
//       setData(props.id);
//       console.log(data);
//     }
//     useEffect(() => {
//         const nowTrailer = `http://cokebear756.synology.me:62322/api/movie/${data}`;
//         FetchTrailer(nowTrailer)
//     }, [])
//     // useEffect(() => {
//     //   const nowTrailer2 = `http://cokebear756.synology.me:62322/api/movie/900667`;
//     //   FetchTrailer2(nowTrailer2)
//     // }, [])
//     // useEffect(() => {
//     //   const nowTrailer3 = `http://cokebear756.synology.me:62322/api/movie/848123`;
//     //   FetchTrailer3(nowTrailer3)
//     // }, [])
//     // useEffect(() => {
//     //   const nowTrailer4 = `http://cokebear756.synology.me:62322/api/movie/758724`;
//     //   FetchTrailer4(nowTrailer4)
//     // }, [])

//     const FetchTrailer = (nowTrailer) => {
//         fetch(nowTrailer, {
//             method : "POST",
//             body: JSON.stringify(Trailer)
//         })
//         .then(res => res.json())
//         .then(res => {
//             setTrailer(res.results) 
//         })
//     }
//     // const FetchTrailer2 = (nowTrailer2) => {
//     //   fetch(nowTrailer2, {
//     //       method : "POST",
//     //       body: JSON.stringify(Trailer2)
//     //   })
//     //   .then(res => res.json())
//     //   .then(res => {
//     //       setTrailer2(res.results) 
//     //   })
//     // }
//     // const FetchTrailer3 = (nowTrailer3) => {
//     //   fetch(nowTrailer3, {
//     //       method : "POST",
//     //       body: JSON.stringify(Trailer3)
//     //   })
//     //   .then(res => res.json())
//     //   .then(res => {
//     //       setTrailer3(res.results) 
//     //   })
//     // }
//     // const FetchTrailer4 = (nowTrailer4) => {
//     //   fetch(nowTrailer4, {
//     //       method : "POST",
//     //       body: JSON.stringify(Trailer4)
//     //   })
//     //   .then(res => res.json())
//     //   .then(res => {
//     //       setTrailer4(res.results) 
//     //   })
//     // }
//   return (
//     <Trail>
//     <Carousel style={{width: '85%', margin: '5px auto', borderRadius: '10px', backgroundColor: '#FFD369', padding: '30px', boxSizing: 'borderBox', height: '100%'}}>
//       <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
//         <ReactPlayer className="d-block w-100" width="800px" height="685px" url={Trailer.youtube_url} alt="xxx"/>
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item>
//       {/* <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
//       <ReactPlayer className="d-block w-100" width="800px" height="685px" url={Trailer2.youtube_url} alt="xxx"/>
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
//       <ReactPlayer className="d-block w-100" width="800px" height="685px" url={Trailer3.youtube_url} alt="xxx"/>
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
//       <ReactPlayer className="d-block w-100" width="800px" height="685px" url={Trailer4.youtube_url} alt="xxx"/>
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item> */}
//     </Carousel>
//     </Trail>
//   );
// }

// export default Trailer;