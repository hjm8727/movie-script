import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import NowLoading from '../../util/Loading';
import NoImage from '../../util/NoImage';
import GridCards3 from '../Cards/GridCard3';

// 개봉 예정작
function UpComing() {
    const [Movies, setMovies] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);
    const [Loading, setLoading] = useState(true);
    
    useEffect(() => {
        const upcoming = `http://cokebear756.synology.me:62322/api/movie/upcoming?page=0`;
        FetchMovies(upcoming)
    }, []);

    const FetchMovies = (upcoming) => {
        setLoading(true)
        fetch(upcoming, {
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
        const upcoming = `http://cokebear756.synology.me:62322/api/movie/upcoming?page=${CurrentPage +1}`;
        FetchMovies(upcoming)
    };

    return (
        <div style={{width: '100%', margin: '0',  backgroundColor: 'black'}}>
        {/* 카테고리 부분 */}
        <div style={{width: '85%', margin: '1rem auto'}}>
            <h2 style={{color: '#FFD369'}}>개봉 예정작</h2>
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

export default UpComing;