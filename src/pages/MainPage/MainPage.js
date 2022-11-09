import React, { useEffect, useState } from 'react';
import GridCards from '../Cards/GridCards';
import NowLoading from '../../util/Loading';
import Trailer from './section/Trailer';
import NoImage from '../../util/NoImage';
import HorizontalScroll from 'react-horizontal-scrolling';

function MainPage() {
    // 로딩용
    const [Loading, setLoading] = useState(true);
    // 영화 정보 (각 카테고리별)
    const [Movies, setMovies] = useState([]);
    const [Movies2, setMovies2] = useState([]);
    const [Movies3, setMovies3] = useState([]);
    const [Movies4, setMovies4] = useState([]);

    // DB에서 영화 정보 카테고리별 받아오기
    useEffect(() => {
        const nowPlaying = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=0`;
        FetchMovies(nowPlaying)

        const popular = `http://cokebear756.synology.me:62322/api/movie/popular?page=0`;
        FetchMovies2(popular)

        const topRated = `http://cokebear756.synology.me:62322/api/movie/topRated?page=0`;
        FetchMovies3(topRated)

        const upcoming = `http://cokebear756.synology.me:62322/api/movie/upcoming?page=0`;
        FetchMovies4(upcoming)
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
        }, setLoading(false))
    };
    const FetchMovies2 = (popular) => {
        setLoading(true)
        fetch(popular, {
            method : "POST",
            body: JSON.stringify(Movies2)
        })
        .then(response => response.json())
        .then(response => {
        setMovies2([...Movies2,...response.results.contents])
        }, setLoading(false))
    };
    const FetchMovies3 = (topRated) => {
        setLoading(true)
        fetch(topRated, {
            method : "POST",
            body: JSON.stringify(Movies3)
        })
        .then(response => response.json())
        .then(response => {
        setMovies3([...Movies3,...response.results.contents])
        }, setLoading(false))
    };
    const FetchMovies4 = (upcoming) => {
        setLoading(true)
        fetch(upcoming, {
            method : "POST",
            body: JSON.stringify(Movies3)
        })
        .then(response => response.json())
        .then(response => {
        setMovies4([...Movies4,...response.results.contents])
        }, setLoading(false))
    };

    return (
        <div style={{width: '100%', margin: '0',  backgroundColor: 'black'}}>
        {/* 영화 예고편 */}
        <Trailer/>
        <br/><br/>
        {/* 카테고리 부분 */}
        <div style={{width: '81%', margin: '1rem auto'}}>

            <h2 style={{color: '#FFD369'}}>최신 영화</h2>
            <hr/>
            {/* 로딩시 보여주기 */}
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            {/* 카테고리 별로 맵에 담아서 출력 */}

            {/* 횡스크롤 */}
            <HorizontalScroll>
            {/* DB에서 받아온 데이터 map에 넣어서 출력 */}
            {Movies && Movies.map((movie, index) => (
                <React.Fragment key={index}>
                {/* 상세 페이지로 이동을 위한 movie Id와 포스터 이미지 props */}
                <GridCards id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </HorizontalScroll>
            <br/><br/><br/>

            <h2 style={{color: '#FFD369'}}>인기 영화</h2>
            <hr/>
            {/* 로딩시 보여주기 */}
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            {/* 카테고리 별로 맵에 담아서 출력 */}

            {/* 횡스크롤 */}
            <HorizontalScroll>
            {/* DB에서 받아온 데이터 map에 넣어서 출력 */}
            {Movies2 && Movies2.map((movie, index) => (
                <React.Fragment key={index}>
                {/* 상세 페이지로 이동을 위한 movie Id와 포스터 이미지 props */}
                <GridCards id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </HorizontalScroll>
            <br/><br/><br/>

            <h2 style={{color: '#FFD369'}}>최고 평점 영화</h2>
            <hr/>
            {/* 로딩시 보여주기 */}
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            {/* 카테고리 별로 맵에 담아서 출력 */}

            {/* 횡스크롤 */}
            <HorizontalScroll>
            {/* DB에서 받아온 데이터 map에 넣어서 출력 */}
            {Movies3 && Movies3.map((movie, index) => (
                <React.Fragment key={index}>
                {/* 상세 페이지로 이동을 위한 movie Id와 포스터 이미지 props */}
                <GridCards id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </HorizontalScroll>
            <br/><br/><br/>
            
            <h2 style={{color: '#FFD369'}}>개봉 예정작</h2>
            <hr/>
            {/* 로딩시 보여주기 */}
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            {/* 카테고리 별로 맵에 담아서 출력 */}

            {/* 횡스크롤 */}
            <HorizontalScroll>
            {/* DB에서 받아온 데이터 map에 넣어서 출력 */}
            {Movies4 && Movies4.map((movie, index) => (
                <React.Fragment key={index}>
                {/* 상세 페이지로 이동을 위한 movie Id와 포스터 이미지 props */}
                <GridCards id={movie.movie_id} image={movie.poster_path ? `${movie.poster_path}` : NoImage}/>
                </React.Fragment>
            ))}
            </HorizontalScroll>
            </div>
        </div>
    );
}

export default MainPage;