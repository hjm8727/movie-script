import { Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GridCards from '../../Cards/GridCards';
import DetInfo from './DetInfo';
import DetailImage from './DetailImage';

// 포스터 클릭시 보이는 영화 상세 페이지
function Detail(props) {
    const {movieId} = useParams();
    const [Movie, setMovie] = useState([])
    const [Cast, setCast] = useState([])

    useEffect(() => {
        // 영화 정보
        let contentInfo = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=0&size=1`
        // 영화 배우/제작진
        let contentCrew = `http://cokebear756.synology.me:62322/api/movie/nowPlaying`

        fetch(contentInfo, {
            method : "POST",
            body: JSON.stringify(Movie)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response.results.contents.movie)
                // setMovie(response.results.contents)
        })
        
        // 배우/제작진 API 받아오기
        fetch(contentCrew)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCast(response.cast)
        })
}, [])
    
    return (
    <div style={{width: '100%', backgroundColor: 'black'}}>
        {/* 상세페이지 헤더영역 - 가로포스터 */}
        <div style={{width: '1280px', margin: '1rem auto'}}>
            <DetailImage image={`http://image.tmdb.org/t/p/w1280${Movie.backdrop_path}`} title={Movie.title}/>
            </div>
        {/* 줄거리 삽입 가능 현재 상세 정보 테이블로 내림 text={Movie.overview} */}

        {/* 상세 페이지 바디 */}
        <div style={{ width: '85%', margin: '1rem auto'}}>


            <DetInfo movie={Movie} />
            {/* 영화 배우 보이는 부분 */}
            <Row gutter={[16, 16]}>
                {Cast && Cast.map((cast, index) =>(
                    <React.Fragment key={index}>
                        <GridCards image={cast.profile_path ? 
                        `http://image.tmdb.org/t/p/w500${cast.profile_path}` : null}
                        characterName={cast.name}/>
                        {/* null 값 대신 빈X 박스 추가 예정 */}
                    </React.Fragment>
                ))}
            </Row>
        </div>
    </div>
)
}

export default Detail