import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import movcss from '../css/Category.css';
import React, { useState } from 'react';
import Modal from '../util/Modal.js';


function Category() {
    return (
    <Carousel>
    <Carousel.Item>
    <thumbGroup>
        <ul>
            <li className='thm'>
            <img className='th' variant="top" src="images/creed3.jpg" alt=""/>
            </li>
            <li className='thm'>
                <Link to="/OpenDetail">
                <img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/avatar.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/chain.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/spider.jpg" alt=""/></Link>
            </li>
        </ul>
    </thumbGroup>
    </Carousel.Item>
    <Carousel.Item>
    <thumbGroup>
        <ul>
            <li className='thm'>
            <img className='th' variant="top" src="images/creed3.jpg" alt=""/>
            </li>
            <li className='thm'>
                <Link to="/OpenDetail">
                <img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/avatar.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/chain.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/spider.jpg" alt=""/></Link>
            </li>
        </ul>
    </thumbGroup>
    </Carousel.Item>
    <Carousel.Item>
    <thumbGroup>
        <ul>
            <li className='thm'>
            <img className='th' variant="top" src="images/creed3.jpg" alt=""/>
            </li>
            <li className='thm'>
                <Link to="/OpenDetail">
                <img className='th' variant="top" src="images/thor-lt.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/avatar.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/chain.jpg" alt=""/></Link>
            </li>
            <li className='thm'>
                <Link to="/">
                <img className='th' variant="top" src="images/spider.jpg" alt=""/></Link>
            </li>
        </ul>
    </thumbGroup>
    </Carousel.Item>
    </Carousel>
    );
}



export default Category;

