import { Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../../api/Config';
import GridCards from '../../Cards/GridCards';
import DetInfo from './DetInfo';
import DetailImage from './DetailImage';

// 포스터 클릭시 보이는 영화 상세 페이지
function Detail(props) {
    const {movieId} = useParams();
    const [Movie, setMovie] = useState([])
    const [Cast, setCast] = useState([])

    useEffect(() => {
        // 영화 정보 API
        let contentInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
        // 영화 배우/제작진 API
        let contentCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`

        // 영화 정보 API 받아오기
        fetch(contentInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)
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
            <DetailImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} title={Movie.title}/>
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
                        `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
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