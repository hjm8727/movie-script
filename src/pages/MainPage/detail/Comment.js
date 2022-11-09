import React from 'react';
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

    // 작성자
    let author = props.comment.id;
    // 이름 길이 
    let count = props.comment.id.length;
    
    const seq = "*";
    return (
        <RE>
            {count === 2 ?
            <>
            <Comment author={<b>{author.substring(0, 1) + seq}</b>} content={<p>{props.comment.comment}</p>}/>
            <p className='under'></p>
            </>
            :
            <>
            <Comment author={<b>{author.substring(0, 1) + seq + author.substring(2)}</b>} content={<p>{props.comment.comment}</p>}/>
            <p className='under'></p>
            </>
            }
        </RE>
    );
}

export default RComment;