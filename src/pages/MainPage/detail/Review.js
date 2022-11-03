import axios from 'axios';
import React, { useState } from 'react'
import styled from "styled-components";

// 글자색이 안보여서 일단 styled components 씌움
const PostBlock=styled.div`
color: white;
`;

// 구현중입니다.
function Reviews(props) {
    const [Review, setReview] = useState("");

    const onChange = (e) => {
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

        const reviews = {
            content: Review
            // 작성자
            // 작성자ID(?)
        }
        console.log(reviews)

        axios.post('comment', reviews)
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
            <div className='title'>{props.title}에 대한 리뷰를 남겨보세요.</div>
            <hr/>
            {props.UserReview && props.UserReview.map((review, index) => (
                (!Comment.responseTo &&
                    <React.Fragment key={index}>

                    </React.Fragment>
                )
            ))}
        </div>
        </PostBlock>
    )
}

export default Reviews