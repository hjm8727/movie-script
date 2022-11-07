import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

const Trail = styled.div`
.carousel-indicators {
    visibility: hidden;
}
.carousel-control-prev,
.carousel-control-next {
    margin-top: 10em;
    height: 26em;
}
`;
// 예고편
function Trailer() {
    const [Trailer, setTrailer] = useState('');
    const [Trailer2, setTrailer2] = useState('');
    const [Trailer3, setTrailer3] = useState('');
    const [Trailer4, setTrailer4] = useState('');

    useEffect(() => {
        const nowTrailer = `http://cokebear756.synology.me:62322/api/movie/505642`;
        FetchTrailer(nowTrailer)
    }, []);
    useEffect(() => {
        const nowTrailer2 = `http://cokebear756.synology.me:62322/api/movie/758724`;
        FetchTrailer2(nowTrailer2)
    }, []);
    useEffect(() => {
        const nowTrailer3 = `http://cokebear756.synology.me:62322/api/movie/877269`;
        FetchTrailer3(nowTrailer3)
    }, []);
    useEffect(() => {
        const nowTrailer4 = `http://cokebear756.synology.me:62322/api/movie/800497`;
        FetchTrailer4(nowTrailer4)
    }, []);

    // 받아온 정보 처리
    const FetchTrailer = (nowTrailer) => {
        fetch(nowTrailer, {
            method : "POST",
            body: JSON.stringify(Trailer)
        })
        .then(res => res.json())
        .then(res => {
            setTrailer(res.results.youtube_url_list[0]) 
        })
    };
    const FetchTrailer2 = (nowTrailer2) => {
        fetch(nowTrailer2, {
            method : "POST",
            body: JSON.stringify(Trailer2)
        })
        .then(res => res.json())
        .then(res => {
        setTrailer2(res.results.youtube_url_list[0]) 
        })
    };
    const FetchTrailer3 = (nowTrailer3) => {
        fetch(nowTrailer3, {
            method : "POST",
            body: JSON.stringify(Trailer3)
        })
        .then(res => res.json())
        .then(res => {
        setTrailer3(res.results.youtube_url_list[0]) 
        })
    };
    const FetchTrailer4 = (nowTrailer4) => {
        fetch(nowTrailer4, {
            method : "POST",
            body: JSON.stringify(Trailer4)
        })
        .then(res => res.json())
        .then(res => {
        setTrailer4(res.results.youtube_url_list[0]) 
        })
    };
    return (
    // youtube 정책에 따라 재생 되지 않는 동영상 존재
    <Trail>
    <Carousel style={{width: '80%', margin: '5px auto', borderRadius: '10px', backgroundColor: '#FFD369', padding: '30px', boxSizing: 'borderBox', height: '100%'}}>
        <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
            <ReactPlayer className="d-block w-100" controls={true} width="800px" height="685px" url={Trailer.youtube_url} alt=""/>
        </Carousel.Item>
        <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
            <ReactPlayer className="d-block w-100" controls={true} width="800px" height="685px" url={Trailer2.youtube_url} alt=""/>
        </Carousel.Item>
        <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
            <ReactPlayer className="d-block w-100" controls={true} width="800px" height="685px" url={Trailer3.youtube_url} alt=""/>
        </Carousel.Item>
        <Carousel.Item style={{position: 'relative', width: '100%', height: '100%'}}>
            <ReactPlayer className="d-block w-100" controls={true} width="800px" height="685px" url={Trailer4.youtube_url} alt=""/>
        </Carousel.Item>
    </Carousel>
    </Trail>
    );
}

export default Trailer;