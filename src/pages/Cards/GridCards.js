import React, { useEffect, useState } from 'react'
import { Col } from 'antd';
import NowLoading from '../../util/Loading';


function GridCards(props) {
    const [Loading, setLoading] = useState(true)
    useEffect(() => setLoading(false))

        return (
    <div style={{display: 'inline-flex'}}>
    <Col lg={6} md={8} xs={24}  style={{paddingBottom: '10px'}}>
        <div style={{ position: 'relative' }}>
            <a href={`/movie/${props.id}`} >
                {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
                <img style={{ width: '245px', height: '320px', border: '2px solid #FFD369'}} src={props.image} alt={props.movieName} />
            </a>
        </div>
    </Col>
    </div>
    )
}

export default GridCards;
