import React, { useState } from 'react'
import { Comment, Button, Input } from 'antd';
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

    const onSubmit = (e) => {
        e.preventDefault();

        // 사용자 정보 확인 

        const rev = {
            // id : user.id, // 아이디(?)
            movId : props.movid,
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
    const reply = [
        <span onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]

    return (
        <div>
            <Comment reply={reply} writer={props.id} content={<p>{props.comment.content}</p>}></Comment>

            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextArea style={{ width: '100%', borderRadius: '5px' }} onChange={handleChange} value={ReviewVal} placeholder="리뷰를 작성해 보세요."/>
                    <br />
                    <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
                </form>
            }
        </div>
    )
}

export default RComment