import React, { useEffect, useState } from 'react';
import {API_URL, IMAGE_BASE_URL} from '../../api/Config';
import MainImage from './section/MainImage';
import GridCards from '../Cards/GridCards';
import {Row} from 'antd';

function MainPage() {

    const [Movies, setMovies] = useState([])
    const [Movies2, setMovies2] = useState([])
    const [Movies3, setMovies3] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState(0)


    // TMDB API 사용중 추후 DB API로 수정 예정
    useEffect(() => {
        const nowPlaying = `${API_URL}/movie/nowPlaying?page=0&size=10`;
        FetchMovies(nowPlaying)
        const topRated = `${API_URL}/movie/topRated?page=0&size=10`;
        FetchMovies2(topRated)
        const upcoming = `${API_URL}/movie/upcoming?page=0&size=10`;
        FetchMovies3(upcoming)
    }, [])

    const FetchMovies = (nowPlaying) => {
        fetch(nowPlaying, {
            method : "POST",
            body: JSON.stringify(Movies)
        })
        .then(response => response.json())
        .then(response => {
        console.log(response)
        setMovies([...Movies,...response.results])
        setMainMovieImage(response.results[0])
        setCurrentPage(response.page)
        },)
        
    }
    const FetchMovies2 = (topRated) => {
        fetch(topRated, {
            method : "POST",
            body: JSON.stringify(Movies2)
        })
        .then(response => response.json())
        .then(response => {
        console.log(response)
        setMovies2([...Movies2,...response.results])
        setMainMovieImage(response.results[0])
        setCurrentPage(response.page)
        },)

    }
    const FetchMovies3 = (upcoming) => {
        fetch(upcoming, {
            method : "POST",
            body: JSON.stringify(Movies3)
        })
        .then(response => response.json())
        .then(response => {
        console.log(response)
        setMovies3([...Movies3,...response.results])
        setMainMovieImage(response.results[0])
        setCurrentPage(response.page)
        },)
    }


    const loadMore = () => {
        let nowPlaying = '';
        nowPlaying = `${API_URL}/movie/nowPlaying?page=${CurrentPage +1}&size=10`;
        FetchMovies(nowPlaying)
    }
    const loadMore2 = () => {
        const topRated = `${API_URL}/movie/topRated?page=${CurrentPage +1}&size=10`;
        FetchMovies2(topRated)
    }
    const loadMore3 = () => {
        const upcoming = `${API_URL}/movie/upcoming?page=${CurrentPage +1}&size=10`;
        FetchMovies3(upcoming)
    }

    return (
        <div style={{width: '100%', margin: '0',  backgroundColor: 'black'}}>
        {/* api 완성후 동영상으로 변경 예정  */}
        {MainMovieImage &&
        <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
        title={MainMovieImage.title}
        text={MainMovieImage.overview}/>
        }

        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>최신 영화</h2>
            <hr/>
            <Row gutter={[16, 16]}>
            {Movies && Movies.map((movie, index) => (
                <React.Fragment key={index}>
                <GridCards MainPage image={movie.file_path ? `${IMAGE_BASE_URL}w500${movie.file_path}` : null} movieId={movie.id} movieName={movie.title}/>
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
            <Row gutter={[16, 16]}>
            {Movies2 && Movies2.map((movie, index) => (
                <React.Fragment key={index}>
                <GridCards MainPage image={movie.file_path ? `${IMAGE_BASE_URL}w500${movie.file_path}` : null} movieId={movie.id} movieName={movie.title}/>
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
            <Row gutter={[16, 16]}>
            {Movies3 && Movies3.map((movie, index) => (
                <React.Fragment key={index}>
                <GridCards MainPage image={movie.file_path ? `${IMAGE_BASE_URL}w500${movie.file_path}` : null} movieId={movie.id} movieName={movie.title}/>
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