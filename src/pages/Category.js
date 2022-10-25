import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from '../util/Modal';
import styled from 'styled-components';

const CategoryBody = styled.div`
.th {
    width: 140px;
    height: 240px;
}
.thm {
    padding: 8px;
    float: left;
}
ul {
    padding-left: 240px;
    padding-right: 240px;
    flex-wrap: nowrap;
    list-style: none;
}
.category {
    color : #FFD369;
    padding-left: 240px;
    font-size: 2rem;
}
.carousel-indicators {
    visibility: hidden;
}

@media screen and (max-width: 1530px) {
    ul {
    padding-left: 220px;
    padding-right: 200px;
    }
}
@media screen and (max-width: 1470px) {
    ul {
    padding-left: 170px;
    padding-right: 160px;
    }
}
@media screen and (max-width: 1380px) {
    ul {
        padding-left: 120px;
        padding-right: 110px;
    }
}
@media screen and (max-width: 1300px) {
    ul {
        padding-left: 120px;
        padding-right: 110px;
    }
}
@media screen and (max-width: 1280px) {
    ul {
        padding-left: 110px;
        padding-right: 100px;
    }
}

@media screen and (max-width: 1260px) {
    .wrap {
        width: 785px;
        /* justify-content: center; */
        margin: 0 auto;
    }
    ul {
        margin-left: 30px;
        margin-right: 10px;
    }
}
`;

const Category = (props) =>{
    
    // 팝업
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const onClickMov = async() => {
        // let result = await KhApi.userLogin(inputId, 1234);
            setModalOpen(true);
        } 
    

    return(
    <CategoryBody className='wrap'>
    <div><b className='category'>{props.name}</b>
    <Carousel className='wrap'>
    <Carousel.Item className='item'>
    <thumbGroup className="container">
    <div className="detail">
        <ul>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/creed3.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/avatar.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/chain.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/blackadam.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/spider.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
        </ul>
        </div>
    </thumbGroup>
    </Carousel.Item>
    <Carousel.Item>
    <thumbGroup className="container">
    <div className="detail">
    <ul>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/creed3.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/avatar.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/chain.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/blackadam.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/spider.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
        </ul>
        </div>
    </thumbGroup>
    </Carousel.Item>
    <Carousel.Item>
    <thumbGroup className="container">
    <div className="detail">
    <ul>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/creed3.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/avatar.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/chain.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/blackadam.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
            <li className='thm'>
                <button className="enable_button" onClick={onClickMov}><img className='th' variant="top" src="images/spider.jpg" alt=""/></button>
                <Modal open={modalOpen} close={closeModal} header="영화 상세 페이지">상세 페이지 내용</Modal>
            </li>
        </ul>
        </div>
    </thumbGroup>
    </Carousel.Item>
    </Carousel></div>
    </CategoryBody>
    )
};

export default Category;
