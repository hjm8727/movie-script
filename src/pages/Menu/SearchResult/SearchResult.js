
import dummy from "../../../DB/data.json"
import styled from "styled-components";
import { useState } from "react";
import MovieApi from "../../../api/MovieApi";
import Menu from "../Menu";


const Container = styled.div`
    width : 1400px ;
    /* background-color: white; */
    color: white;
    margin: 0 auto;
    li{
        list-style: none;
    }

`;

const SearchResult = async () =>{

    const [isResult, setResult] = useState(false);
    // 검색한 영화 제목값
    const searchRes = window.localStorage.getItem("inputTxt")
    // 결과값을 서버로 전송
    const res = await MovieApi.search(searchRes)
    // 서버에 전송한 영화 제목값이 있으면
    if(res.data)setResult(true);

    return(
        <>
        <Menu/>
            <Container>
            <h1>검색결과</h1>
            
            {/* 조건부 랜더링 */}
            {isResult ?

        // 검색결과와 일치하는 영화 데이터 출력
            <ul className="list_movie">
                {res.map(res => (
                    <li key = {res.id}>
                        <h1>{res.ko}</h1>
                        <img src={res.url} alt="movie.img"/>
                    </li>
                ))}

                {/* 확인용 더미 파일 */}
                {/* {dummy.movie.map(movie => (
                    <li key ={movie.ko}>
                        <h1>{movie.ko}</h1>
                        <img src={movie.url} alt="movie.img"/>
                    </li>
                ))} */}

            </ul>

            :
        // 검색결과가 없는 경우
            <div>
                <h1>검색 결과가 없습니다..</h1>
                <h2>이런 영화는 어떠실까요? </h2>
                {/* 노트북에 있는 난수로 얻어낸 영화추천 로직 입력 */}
            </div>
            }
        </Container>
        </>
    )
}

export default SearchResult;