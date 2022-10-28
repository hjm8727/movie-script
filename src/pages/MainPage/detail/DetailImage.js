import React from 'react';

// 상세페이지 용
function DetailImage(props) {
    return (
        <div style={{
            background: `url('${props.image}'), black`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            width: '1280px',
            position: 'relative',
        }}>
            <div style={{position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <h2 style={{color: '#FFD669', fontSize: '3rem'}}>{props.title}</h2>
                <p style={{color:'#FFD669', fontSize: '1rem'}}>{props.text}</p>
            </div>
        </div>
    )
}

export default DetailImage;