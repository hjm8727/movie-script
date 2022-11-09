import React, { useEffect, useState } from 'react';
import { Col } from 'antd';
import NowLoading from '../../util/Loading';
import xbox from "../../images/sad.jpg";

// 상세 페이지 카테고리별 배우 사진용 그리드카드
function GridCards2(props) {
    // 로딩중
    const [Loading, setLoading] = useState(true);
    useEffect(() => { setLoading(false) }, []);
    // 이미지 없을시 아이콘 처리
    const onErrorImg = (e) => {
        e.target.src = xbox;
    }
    return (
        <div style={{display: 'inline-flex'}}>
        <Col lg={6} md={8} xs={24}  style={{paddingBottom: '10px'}}>
            <div style={{ position: 'relative' }}>
            {/* 렌더링 전 로딩중일시 보이게 */}
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <img style={{ width: '245px', height: '320px', border: '2px solid #FFD369'}} src={props.image} onError={onErrorImg} alt=""/>
            </div>
            <div style={{width: '240px'}} >
            {/* 배우이름과 배역 */}
            <b style={{color: '#FFD369'}}>{props.characterName} </b>
            <br/><b style={{color: 'white'}} >as </b><b style={{color: '#FFD369'}}>{props.character}</b></div>
        </Col>
        </div>
    );
}

export default GridCards2;