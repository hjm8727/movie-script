import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from '../css/Nav.css';

const Menu = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="container">
                    {/* 로고 */}
                    <span><img src="images/Logo.png" alt="Bootstrap" width="30" height="24"/> </span>
                    {/* 홈 */}
                    <span><a><Link to="/">Home</Link></a></span>

                    {/* 카테고리 */}
                    <span>
                    <div class="dropdown">
                        <p class="dropbtn">카테고리</p>
                        <div class="dropdown-content">
                            {/* Link to 로 변환 */}
                            <a href="#">카테고리1</a>
                            <a href="#">카테고리2</a>
                            <a href="#">카테고리3</a>
                        </div>
                    </div>
                    </span>
                    {/* 검색창 */}
                    <span>
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </span>
                    <br></br>
                    </div>
                </nav>
                </div>
    );
}

export default Menu;