import React, { useEffect, useState } from 'react';
import { Col } from 'antd';
import NowLoading from '../../util/Loading';
import xbox from "../../images/sad.jpg";


function GridCards2(props) {
    const [Loading, setLoading] = useState(true);
    useEffect(() => { setLoading(false) }, []);
    
    const onErrorImg = (e) => {
        e.target.src = xbox;
    }

    return (
        <div style={{display: 'inline-flex'}}>
        <Col lg={6} md={8} xs={24}  style={{paddingBottom: '10px'}}>
            <div style={{ position: 'relative' }}>
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <img style={{ width: '245px', height: '320px', border: '2px solid #FFD369'}} src={props.image} onError={onErrorImg} alt=""/>
            </div>
            <div style={{width: '240px'}} >
            <b style={{color: '#FFD369'}}>{props.characterName} </b>
            <br/><b style={{color: 'white'}} >as </b><b style={{color: '#FFD369'}}>{props.character}</b></div>
        </Col>
        </div>
    );
}

export default GridCards2;