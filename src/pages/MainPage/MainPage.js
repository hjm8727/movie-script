import React, { useEffect, useState } from 'react';
import GridCards from '../Cards/GridCards';
import {Row} from 'antd';
import NowLoading from '../../util/Loading';
import Trailer from './section/Trailer';
import NoImage from '../../util/NoImage';

function MainPage() {
    // 로딩용
    const [Loading, setLoading] = useState(true)
    // 영화 정보 
    const [Movies, setMovies] = useState([])
    const [Movies2, setMovies2] = useState([])
    const [Movies3, setMovies3] = useState([])
    // 더보기 위해 다음 데이터 받아오기 용도
    const [CurrentPage, setCurrentPage] = useState(0)

    // DB에서 영화 정보 카테고리별 받아오기
    useEffect(() => {
        const nowPlaying = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=0&size=10`;
        FetchMovies(nowPlaying)

        const topRated = `http://cokebear756.synology.me:62322/api/movie/topRated?page=0&size=10`;
        FetchMovies2(topRated)

        const upcoming = `http://cokebear756.synology.me:62322/api/movie/popular?page=0&size=10`;
        FetchMovies3(upcoming)
    }, [])
    

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
    }
    const FetchMovies2 = (topRated) => {
        setLoading(true)
        fetch(topRated, {
            method : "POST",
            body: JSON.stringify(Movies2)
        })
        .then(response => response.json())
        .then(response => {
        setMovies2([...Movies2,...response.results.contents])
        setCurrentPage(response.results.page)
        }, setLoading(false))
    }
    const FetchMovies3 = (upcoming) => {
        setLoading(true)
        fetch(upcoming, {
            method : "POST",
            body: JSON.stringify(Movies3)
        })
        .then(response => response.json())
        .then(response => {
        setMovies3([...Movies3,...response.results.contents])
        setCurrentPage(response.results.page)
        }, setLoading(false))
    }

    // 더보기 입력시 DB에서 다음 정보 받아오기
    const loadMore = () => {
        const nowPlaying = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=${CurrentPage +1}&size=10`;
        FetchMovies(nowPlaying)
    }
    const loadMore2 = () => {
        const topRated = `http://cokebear756.synology.me:62322/api/movie/topRated?page=${CurrentPage +1}&size=10`;
        FetchMovies2(topRated)
    }
    const loadMore3 = () => {
        const upcoming = `http://cokebear756.synology.me:62322/api/movie/upcoming?page=${CurrentPage +1}&size=10`;
        FetchMovies3(upcoming)
    }

    return (
        <div style={{width: '100%', margin: '0',  backgroundColor: 'black'}}>
        {/* 영화 예고편 */}
        <Trailer/>
        <br/>
        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>최신 영화</h2>
            <hr/>
            {/* 로딩시 보여주기 */}
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            {/* 카테고리 별로 맵에 담아서 출력 */}
            <Row gutter={[16, 16]}>
            {Movies && Movies.map((movie, index) => (
                <React.Fragment key={index}>
                    {/* 상세 페이지로 이동을 위한 movie Id와 포스터 이미지 props */}
                <GridCards id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </Row>
        {/* 더보기 */}
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <button style={{backgroundColor: '#FFD369', color: 'black'}} onClick={loadMore}>더 보기</button>
        </div>
        </div>

        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>최고 평점 영화</h2>
            <hr/>
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <Row gutter={[16, 16]}>
            {Movies2 && Movies2.map((movie, index) => (
                <React.Fragment key={index}>
                <GridCards id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </Row>
        {/* 더보기 */}
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <button style={{backgroundColor: '#FFD369', color: 'black'}} onClick={loadMore2}>더 보기</button>
        </div>
        </div>

        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>인기작</h2>
            <hr/>
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <Row gutter={[16, 16]}>
            {Movies3 && Movies3.map((movie, index) => (
                <React.Fragment key={index}>
                <GridCards id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </Row>
        {/* 더보기 */}
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <button style={{backgroundColor: '#FFD369', color: 'black'}} onClick={loadMore3}>더 보기</button>
        </div>
        </div>
        </div>
    );
}

export default MainPage;