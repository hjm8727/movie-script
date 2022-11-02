import React from 'react';

// 메인페이지용
function Trailer(props) {
    return (
        <div style={{
            background: `url('${props.src}'), black`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            position: 'relative',
        }}>
            <div style={{position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <h2 style={{color: '#FFD669'}}>{props.title}</h2>
                <p style={{color:'#FFD669', fontSize: '1rem'}}>{props.text}</p>
            </div>
        </div>
    )
}

export default Trailer;