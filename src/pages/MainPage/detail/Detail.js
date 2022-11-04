import { Button, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GridCards2 from '../../Cards/GridCards2';
import DetInfo from './DetInfo';
import DetailImage from './DetailImage';
import NoImage from '../../../util/NoImage';
import Reviews from './Reviews';

// 포스터 클릭시 보이는 영화 상세 페이지
function Detail(props) {
    const {movieId} = useParams();
    const [Movie, setMovie] = useState([])
    const [Cast, setCast] = useState([])
    const [CastToggle, setCastToggle] = useState(false)
    const [ReviewLists, setReviewLists] = useState([])

    useEffect(() => {
        // 영화 정보
        let contentInfo = `http://cokebear756.synology.me:62322/api/movie/${movieId}`
        // 영화 배우/제작진
        let contentCrew = `http://cokebear756.synology.me:62322/api/movie/${movieId}`
        // 리뷰 
        let contentComment = `http://cokebear756.synology.me:62322/api/movie/${movieId}`

        // 영화 상세 정보 처리
        fetch(contentInfo, {
            method: "POST",
            body: JSON.stringify(Movie)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response.results)
        })
        
        // 배우/제작진 정보 처리
        fetch(contentCrew, {
            method : "POST",
            body: JSON.stringify(Cast)
        })
            .then(response => response.json())
            .then(response => {
                setCast(response.results.cast)
        })
        // 리뷰 
        fetch(contentComment,{
            method : "POST",
            body: JSON.stringify(ReviewLists)
        })
            .then(response => response.json())
            .then(response => {
                setReviewLists(response.results.review)
        })
        }, [])

        // 배우 정보를 토글로 가렸다 보여주기
        const toggleCastView = () => {
            setCastToggle(!CastToggle)
        }
        // 리뷰 목록 업데이트
        const updateReview = (newReview) => {
            setReviewLists(ReviewLists.concat(newReview))
        }
    
    return (
    <div style={{width: '100%', backgroundColor: 'black'}}>
        {/* 상세페이지 헤더영역 - 가로포스터 */}
        <div style={{width: '1280px', height: '600px', margin: '0.1rem auto'}}>
            <DetailImage image={`${Movie.backdrop_path}`} title={Movie.title}/>
        </div>
        {/* 상세 페이지 바디 */}
        <div style={{ width: '85%', margin: '1rem auto'}}>
        <DetInfo movie={Movie} />
        {/* 영화 배우 정보 */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem'}}>
            <Button style={{backgroundColor: '#FFD669', color: 'black'}} onClick={toggleCastView}>출연 배우 보기</Button>
        </div>
        {CastToggle &&
            <Row gutter={[16, 16]}>
                {Cast && Cast.map((cast, index) =>(
                    <React.Fragment key={index}>
                        <GridCards2 image={cast.profile_path ? `${cast.profile_path}` : NoImage} characterName={`${cast.name}`} character={`${cast.character}`}/>
                    </React.Fragment>
                ))}
            </Row>
        }
        {/* 리뷰 */}
        <div>

        <Reviews movieTitle={Movie.title} ReviewLists={ReviewLists} movId={movieId} refreshFunction={updateReview} />

        </div>
        </div>
    </div>
)
}

export default Detail;