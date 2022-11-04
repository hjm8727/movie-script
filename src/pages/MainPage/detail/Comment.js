import React from 'react'
import { Comment } from 'antd';
import styled from 'styled-components';

const RE = styled.div`
b {
    color: #FFD669;
}
`

function RComment(props) {
    
    return (
        <RE>
            <Comment author={<b>{props.comment.id}</b>} content={<p>{props.comment.comment}</p>}/>
        </RE>
    )
}

export default RComment