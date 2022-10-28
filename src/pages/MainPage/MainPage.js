import React, { useEffect, useState } from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../api/Config';
import MainImage from './section/MainImage';
import GridCards from '../Cards/GridCards';
import {Row} from 'antd';

function MainPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState(0)

    // TMDB API 사용중 추후 DB API로 수정 예정
    useEffect(() => {
        const content = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
        FetchMovies(content)        
    }, [])

    const FetchMovies = (content) => {
        fetch(content)
        .then(response => response.json())
        .then(response => {
        console.log(response)
        setMovies([...Movies,...response.results])
        setMainMovieImage(response.results[0])
        setCurrentPage(response.page)
        })
    }

    const loadMore = () => {
        const content = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage +1}`;
        FetchMovies(content)
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
                <GridCards MainPage image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null} movieId={movie.id} movieName={movie.title}/>
                </React.Fragment>
            ))}
            </Row>
        </div>

        {/* 더보기 */}
        <div style={{display: 'flex', justifyContent: 'center' }}>
            <button style={{backgroundColor: '#FFD369', color: 'black'}} onClick={loadMore}>더 보기</button>
        </div>
        </div>
    );
}

export default MainPage;