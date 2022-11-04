import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from "styled-components";
import { Button } from 'antd';
import RComment from './Comment';

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
    // 로그인된 사용자 ID 받아오기
    const idc = window.localStorage.getItem("userId");

    const onSubmit = (e) => {
        e.preventDefault();
    
        const rev = {
            id : idc,
            movie_id : props.movId,
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
        <b style={{color: '#FFD369'}}>{props.movieTitle}에 대한 리뷰를 남겨 보세요</b>
        <hr/>
        
        {props.ReviewLists && props.ReviewLists.map((comment, index) => (
            // (!review.responseTo &&
                <React.Fragment key={index}>
                    <RComment comment={comment} movId={props.movId} refreshFunction={props.refreshFunction}/>
                </React.Fragment>
                // )
        ))}
        {props.ReviewLists && props.ReviewLists.length === 0 &&
            <div style={{color: '#FFD369', display: 'flex', justifyContent:'center', alignItems:'center', height:'200px'}} >
                첫 리뷰를 남겨보세요.
            </div>
        }
        <div style={{marginLeft: '13rem', marginRight: '13rem'}}>
        <InputGroup>
        <Form.Control as="textarea" style={{ width: '60%', borderRadius: '5px', marginLeft: '5px', marginRight: '5px' }} onChange={handleChange} value={Review} placeholder="리뷰를 남겨 보세요." />
            <Button style={{ backgroundColor: '#FFD369' ,width: '10%', fontWeight: 'bold'}} onClick={onSubmit}>저장</Button>
        </InputGroup>
        <br/>      
        </div>
        </PostBlock>
    )
}

export default Reviews