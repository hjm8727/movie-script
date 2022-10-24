// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import Test from "./Like";
import mycss from 'src/styles/MyPage.css';


const Mypage = () => {
    return (
    <div>
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to="/main">홈</Link>
            <Link className="nav-link mypage" aria-current="page" to="/" aria-disabled>마이페이지</Link>
            {/* <Link className="nav-link" to="/infoset">회원정보수정</Link> */}
            <Link className="nav-link" to="/inquire">1:1 문의하기</Link>
        </nav>
        <div className="container">
            <BsFillPeopleFill icon={BsFillPeopleFill} size='160px' style={{border:'1px solid rgba(35, 35, 35, .3)', margin:'30px 10px'}}/>
            <br />
            <Link className="profil" to="/infoset">회원정보수정</Link>
            <h3 className="info">이름 : 지민</h3>
            <h3 className="info">가입일 : 2022.10.19</h3>
            <br />
            <h2>찜 리스트</h2>
            <Test />
            <Test />
            <Test />
            <Test />
            <Test />
            <Test />
        </div>
    </div>
    );
}


export default Mypage;