import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Category from '../css/Category.css';
import React, { useState } from 'react';
import Modal from '../util/Modal.js';


function MovDetail() {
    return (
    <Carousel>
    <Carousel.Item>
    <thumbGroup style={{marginLeft: '170px', width: '500px'}} >
    <thumb className='thm'>
        <img className='th' variant="top" src="images/creed3.jpg" alt=""/>
    </thumb>
    <thumb className='thm'>
        <Link to="/OpenDetail">
        <img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></Link>
    </thumb>
    <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="images/avatar.jpg" alt=""/></Link>
    </thumb>
    <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></Link>
    </thumb>
    <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="images/chain.jpg" alt=""/></Link>
    </thumb>
    </thumbGroup>
    </Carousel.Item>
    <Carousel.Item>
    <thumbGroup style={{marginLeft: '100px', marginRight: '100px', width: '600px'}} >
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/creed3.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/avatar.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/chain.jpg" alt=""/></button>
    </thumb>
    </thumbGroup>
    </Carousel.Item>
    <Carousel.Item>
    <thumbGroup style={{marginLeft: '200px', marginRight: '200px', width: '600px'}} >
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/chain.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/creed3.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/avatar.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></button>
    </thumb>
    <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></button>
    </thumb>
    </thumbGroup>
    </Carousel.Item>
    </Carousel>
    );
}

const OpenDetail = () => {

    const [modalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
    setModalOpen(false);
    };


const onClickImg = async() => {
    console.log("Click 상세페이지");
    // let result = await KhApi.userLogin(inputId, 1234);
    
    setModalOpen(true);
    }
    return (
        <div className="detail">
            <Modal open={modalOpen} close={closeModal} header="영화 상세페이지">내용</Modal>
        </div>
    );
}


export default MovDetail;