import React from 'react';

// 상세페이지 용
function DetailImage(props) {
    return (
        <div style={{ background: `black`, height: '600px', backgroundSize: 'cover', backgroundPosition: '100% 100%', 
            backgroundRepeat: 'no-repeat', width: '1260px', position: 'relative', backgroundImage:`url('${props.image}')`}}>
            <div style={{position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <h2 style={{color: '#FFD669', fontSize: '3rem'}}>{props.title}</h2>
                {/* <p style={{color:'#FFD669', fontSize: '1rem'}}>{props.text}</p> */}
            </div>
        </div>
    )
}

export default DetailImage;