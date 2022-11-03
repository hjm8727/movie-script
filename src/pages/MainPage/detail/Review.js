import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from "styled-components";
import { Button } from 'antd';
import Comment from './Commnet';

// 글자색이 안보여서 일단 styled components 씌움
const PostBlock=styled.div`
color: white;
`;

// 구현중입니다.
function Reviews(props) {
    const [Review, setReview] = useState("");

    const handleChange = (e) => {
        setReview(e.target.value);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        // 사용자 정보 확인 

        const rev = {
            // id : user.id, // 아이디(?)
            movId : props.movid,
            review : Review
        }
        console.log(rev)

        axios.post('http://cokebear756.synology.me:62322/api/member/review', rev)
        .then(response => {
            if(response.data.statusCode === 200) {
            setReview("")
            props.refreshFunction(response.data.result)
        } else {
            alert('리뷰 저장 실패')
        }
        })
    }

    return (
        <PostBlock>
        <b>{props.movieTitle}에 대한 리뷰를 남겨 보세요</b>
        <hr/>
        {props.ReviewLists && props.ReviewLists.map((review, index) => (
            (!review.responseTo &&
                <React.Fragment>
                    <Comment comment={review} movId={props.movId} refreshFunction={props.refreshFunction}/>
                </React.Fragment>
                )
        ))}
        {props.ReviewLists && props.ReviewLists.length === 0 &&
            <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'200px'}} >
                    이 영화에 첫 리뷰를 남겨보세요.
                </div>
        }
        <div>
        <InputGroup>
        <InputGroup.Text style={{backgroundColor: '#FFD669'}}>리뷰 작성</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" style={{ width: '83%', borderRadius: '5px' }} onChange={handleChange} value={Comment} placeholder="리뷰를 남겨 보세요." />
        <Button style={{ width: '7%'}} onClick={onSubmit}>저장</Button>
        </InputGroup>
        <br />      
        </div>
        </PostBlock>
    )
}

export default Reviews