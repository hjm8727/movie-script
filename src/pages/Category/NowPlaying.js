import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import NowLoading from '../../util/Loading';
import NoImage from '../../util/NoImage';
import GridCards3 from '../Cards/GridCard3';
import Menu from '../Menu/Menu';

// 최신 영화
function NowPlaying() {
    // DB에서 영화 데이터 받아오기
    const [Movies, setMovies] = useState([]);
    // 더보기 위한 페이지 세팅
    const [CurrentPage, setCurrentPage] = useState(0);
    // 로딩중
    const [Loading, setLoading] = useState(true);
    
    // DB에서 영화 정보 받아오기
    useEffect(() => {
        const nowPlaying = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=0`;
        FetchMovies(nowPlaying)
    }, []);

    // 받아온 정보 처리
    const FetchMovies = (nowPlaying) => {
        setLoading(true)
        fetch(nowPlaying, {
            method : "POST",
            body: JSON.stringify(Movies)
        })
        .then(response => response.json())
        .then(response => {
        setMovies([...Movies,...response.results.contents])
        setCurrentPage(response.results.page)
        }, setLoading(false))
    };

    // 더보기
    const loadMore = () => {
        const nowPlaying = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=${CurrentPage +1}`;
        FetchMovies(nowPlaying)
    };

    return (
        <div style={{width: '100%', margin: '0',  backgroundColor: 'black'}}>
        <Menu/>
        <br/>
        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>최신 영화</h2>
            <hr/>
            {/* 렌더링 전 로딩중일시 보이게 */}
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <Row gutter={[16, 16]}>
            {/* DB에서 받아온 데이터 map에 넣어서 출력 */}
            {Movies && Movies.map((movie, index) => (
                <React.Fragment key={index}>
                <GridCards3 id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </Row>
        {/* 더보기 */}
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <button style={{backgroundColor: '#FFD369', color: 'black'}} onClick={loadMore}>더 보기</button>
        </div>
        </div>
        </div>
        );
}

export default NowPlaying;
