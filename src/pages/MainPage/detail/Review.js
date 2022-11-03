import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from "styled-components";
import { Button } from 'antd';

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


    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
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
            setModalOpen(true);
        }
        })
    }

    return (
        <PostBlock>
        <div>
        <InputGroup>
        <InputGroup.Text>리뷰 작성</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments" />
                    <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
        </InputGroup>
                <br />
                
        </div>
        </PostBlock>
    )
}

export default Reviews