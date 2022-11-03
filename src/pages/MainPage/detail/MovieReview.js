
import styled from "styled-components";
import axios from 'axios';
import React, { useState } from 'react'

function MovieReview(props){
    const [review, setReview] = useState('');
    const [reviewArray, setReviewArray] = useState([{id : '영화',review : review},]);
    const handleReviewInput = event => {
        setReview(event.target.value);
      };
      const handleTotalEnter = event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          const repoArray = [...reviewArray];
          if (event.target.value !== '')
            repoArray.push({ id: '익명', review: review });
          setReviewArray(repoArray);
          event.target.value = '';
        }
      };
    return(
        <div>
            <input type="text" onKeyPress={event=>{handleTotalEnter(event);}} onKeyUp={event => {
                    handleReviewInput(event);
                  }}>
            </input>

        </div>
    )
}
export default MovieReview;