import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import NowLoading from '../../util/Loading';
import NoImage from '../../util/NoImage';
import GridCards3 from '../Cards/GridCard3';

// 인기 영화
function Popular() {
    const [Movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);
    const [Loading, setLoading] = useState(true);
    
    useEffect(() => {
        const popular = `http://cokebear756.synology.me:62322/api/movie/popular?page=0`;
        FetchMovies(popular)
    }, []);

    const FetchMovies = (popular) => {
        setLoading(true)
        fetch(popular, {
            method : "POST",
            body: JSON.stringify(Movies)
        })
        .then(response => response.json())
        .then(response => {
        setMovies([...Movies,...response.results.contents])
        setCurrentPage(response.results.page)
        }, setLoading(false))
    };
    const loadMore = () => {
        const popular = `http://cokebear756.synology.me:62322/api/movie/popular?page=${CurrentPage +1}`;
        FetchMovies(popular)
    };

    return (
        <div style={{width: '100%', margin: '0',  backgroundColor: 'black'}}>
        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>인기 영화</h2>
            <hr/>
            {Loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NowLoading/></div>}
            <Row gutter={[16, 16]}>
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

export default Popular;
