import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from '../util/Modal';
import poster from '../styles/Category.css';

const CategoryB = () =>{
    
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
        <div><b className='category'>인기 상영작</b>
    <Carousel>
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
    )
};

export default CategoryB;