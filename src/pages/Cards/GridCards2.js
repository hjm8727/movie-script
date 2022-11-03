import React, { useEffect, useState } from 'react'
import { Col } from 'antd';
import NowLoading from '../../util/Loading';
import NoImage from '../../util/NoImage';

function GridCards2(props) {
    const [Loading, setLoading] = useState(true)
    useEffect(() => { setLoading(false) }, [])

    return (
        <div style={{display: 'inline-flex'}}>
        <Col lg={6} md={8} xs={24}  style={{paddingBottom: '10px'}}>
            <div style={{ position: 'relative' }}>
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <img style={{ width: '245px', height: '320px', border: '2px solid #FFD369'}} src={props.image} alt={NoImage} />
            </div>
            <b style={{color: '#FFD369'}}>{props.characterName} </b>
            <br/><b style={{color: 'white'}} >as </b><b style={{color: '#FFD369'}}>{props.character}</b>
        </Col>
        </div>
    )
}

export default GridCards2