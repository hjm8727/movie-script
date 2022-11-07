import React from 'react';

// 상세페이지 상단 부분 가로이미지
function DetailImage(props) {
    return (
        <div style={{ background: `black`, height: '600px', backgroundSize: 'cover', backgroundPosition: '100% 100%', 
            backgroundRepeat: 'no-repeat', width: '1260px', position: 'relative', backgroundImage:`url('${props.image}')`}}>
            <div style={{position: 'absolute', maxWidth: '700px', bottom: '2rem', marginLeft: '2rem'}}>
                <h2 style={{color: '#FFD669', fontSize: '3rem'}}>{props.title}</h2>
            </div>
        </div>
    );
}

export default DetailImage;