import React from 'react'
import { Comment } from 'antd';
import styled from 'styled-components';

const RE = styled.div`
b {
    color: #FFD669;
}
hr {
    background-color: gold;
    height: 5px;
    border: 0px;
    z-index: 1;
}
.under { 
    border-bottom: 3px solid silver;
}
`

function RComment(props) {
    return (
        <RE>
            <Comment author={<b>{props.comment.id}</b>} content={<p>{props.comment.comment}</p>}/>
            <p className='under'></p>
        </RE>
    )
}

export default RComment