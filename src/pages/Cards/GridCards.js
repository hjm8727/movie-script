import React from 'react'
import { Col } from 'antd';


function GridCards(props) {
    // 영화 포스터
    if(props.MainPage) {
        return (
    <div style={{display: 'inline-flex'}}>
    <Col lg={6} md={8} xs={24}  style={{paddingBottom: '10px'}}>
        <div style={{ position: 'relative' }}>
            <a href={`/movie/${props.movieId}`} >
                <img style={{ width: '245px', height: '320px', border: '2px solid #FFD369'}} src={props.image} alt={props.movieName} />
            </a>
        </div>
    </Col>
    </div>
    )
    } else {
        return (
            // 배우 사진
            <div style={{display: 'inline-flex'}}>
            <Col lg={6} md={8} xs={24}  style={{paddingBottom: '10px'}}>
                <div style={{ position: 'relative' }}>
                    <img style={{ width: '245px', height: '320px', border: '2px solid #FFD369'}} src={props.image} alt={props.characterName} />
                </div>
                <b style={{color: '#FFD369'}}>{props.characterName}</b>
            </Col>
            </div>
        )
    }
}

export default GridCards;
