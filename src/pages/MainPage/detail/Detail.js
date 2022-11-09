import { Button, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GridCards2 from '../../Cards/GridCards2';
import DetInfo from './DetInfo';
import DetailImage from './DetailImage';
import Reviews from './Reviews';
import Menu from '../../Menu/Menu';

// 포스터 클릭시 보이는 영화 상세 페이지
function Detail(props) {

    // 리액트에서 제공하는 Hook으로 동적으로 라우팅을 생성하기 위해 사용
    const {movieId} = useParams();

    // 영화 정보
    const [Movie, setMovie] = useState([]);

    // 배우 정보
    const [Cast, setCast] = useState([]);

    // 배우 보기 토글
    const [CastToggle, setCastToggle] = useState(false);

    // 리뷰 목록
    const [ReviewLists, setReviewLists] = useState([]);

    // 영화 상세정보/배우/리뷰
    useEffect(() => {
        let contentInfo = `http://cokebear756.synology.me:62322/api/movie/${movieId}`;

        // 영화 상세 정보 처리
        fetch(contentInfo, {
            method: "POST",
            body: JSON.stringify(Movie, Cast, ReviewLists)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response.results)
                setCast(response.results.cast)
                setReviewLists(response.results.review)
        })
        }, []);

        // 배우 정보를 토글로 가렸다 보여주기
        const toggleCastView = () => {
            setCastToggle(!CastToggle)
        }
        // 리뷰 목록 업데이트
        const updateReview = (newReview) => {
            setReviewLists(ReviewLists.concat(newReview))
        };

    return (
        <div>
        <Menu/>
        <div style={{width: '100%', backgroundColor: 'black'}}>
            {/* 상세페이지 헤더영역 - 가로포스터 */}
            <div style={{width: '1280px', height: '700px', margin: '0.1rem auto'}}>
                <DetailImage image={`${Movie.backdrop_path}`} title={Movie.title}/>
            </div>

            {/* 상세 페이지 바디 */}
            <div style={{ width: '85%', margin: '1rem auto'}}>
                {/* 받아온 정보 DetInfo로 넘김 */}
                <DetInfo movie={Movie} />
            
            {/* 영화 배우 정보 */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                <Button style={{backgroundColor: '#FFD669', color: 'black'}} onClick={toggleCastView}>출연 배우 보기</Button>
            </div>
            {CastToggle &&
                <Row gutter={[16, 16]}>
                    {Cast && Cast.map((cast, index) =>(
                        <React.Fragment key={index}>
                            <GridCards2 image={cast.profile_path ? `${cast.profile_path}` : null} characterName={`${cast.name}`} character={`${cast.character}`}/>
                        </React.Fragment>
                    ))}
                </Row>
            }
            <br/>
            
            {/* 리뷰 */}
            <div>
                <Reviews movieTitle={Movie.title} ReviewLists={ReviewLists} movId={movieId} refreshFunction={updateReview} />
            </div>
            </div>
            </div>
        </div>
    );
}

export default Detail;