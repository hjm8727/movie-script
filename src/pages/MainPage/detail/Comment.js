import React, { useState } from 'react'
import { Comment, Button, Input, Tooltip } from 'antd';
import Axios from 'axios';
const { TextArea } = Input;

function RComment(props) {

    const [ReviewVal, setReviewVal] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    const handleChange = (e) => {
        setReviewVal(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    // 로그인된 사용자 ID 받아오기
    const idc = window.localStorage.getItem("userId");

    const onSubmit = (e) => {
        e.preventDefault();
    
        const rev = {
            id : idc,
            movId : props.movId,
            review : ReviewVal
        }
        console.log(rev)

        Axios.post('http://cokebear756.synology.me:62322/api/member/review', rev)
        .then(response => {
            if(response.data.statusCode === 200) {
            setReviewVal("")
            props.refreshFunction(response.data.result)
        } else {
            alert('리뷰 저장 실패')
        }
        })
    }
console.log(props)
    return (
        <div>
            <Comment author={<a>{props.comment.id}</a>} content={<p>{props.comment.comment}</p>}/>
            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextArea style={{ width: '100%', borderRadius: '5px' }} onChange={handleChange} value={ReviewVal} placeholder="리뷰를 작성해 보세요."/>
                    <br/>
                    <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>저장</Button>
                </form>
            }
        </div>
    )
}

export default RComment