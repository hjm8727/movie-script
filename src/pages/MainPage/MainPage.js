import React, { useEffect, useState } from 'react';
import GridCards from '../Cards/GridCards';
import {Row} from 'antd';
import NowLoading from './section/Loading';
import NoImage from './section/NoImage';
import Trailer from './section/Trailer';

function MainPage() {
    const [Loading, setLoading] = useState(true)

    const [Movies, setMovies] = useState([])
    const [Movies2, setMovies2] = useState([])
    const [Movies3, setMovies3] = useState([])
    const [CurrentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        const nowPlaying = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=0&size=10`;
        FetchMovies(nowPlaying)

        const topRated = `http://cokebear756.synology.me:62322/api/movie/topRated?page=0&size=10`;
        FetchMovies2(topRated)

        const upcoming = `http://cokebear756.synology.me:62322/api/movie/upcoming?page=0&size=10`;
        FetchMovies3(upcoming)
    }, [])

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
        // console.log(response)
        setMovies3([...Movies3,...response.results.contents])
        setCurrentPage(response.results.page)
        }, setLoading(false))
    }


    const loadMore = () => {
        // let nowPlaying = '';
        const nowPlaying = `http://cokebear756.synology.me:62322/api/movie/nowPlaying?page=${CurrentPage +1}&size=10`;
        FetchMovies(nowPlaying)
    }
    const loadMore2 = () => {
        // let topRated = '';
        const topRated = `http://cokebear756.synology.me:62322/api/movie/topRated?page=${CurrentPage +1}&size=10`;
        FetchMovies2(topRated)
    }
    const loadMore3 = () => {
        // let upcoming = '';
        const upcoming = `http://cokebear756.synology.me:62322/api/movie/upcoming?page=${CurrentPage +1}&size=10`;
        FetchMovies3(upcoming)
    }

    return (
        <div style={{width: '100%', margin: '0',  backgroundColor: 'black'}}>
        <Trailer/>
        
        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>최신 영화</h2>
            <hr/>
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <Row gutter={[16, 16]}>
            {Movies && Movies.map((movie, index) => (
                <React.Fragment key={index}>
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
            <h2 style={{color: '#FFD369'}}>개봉 예정작</h2>
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