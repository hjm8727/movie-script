import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import Test from "./Card";
import styled from 'styled-components';


const StyleMypage = styled.div`
.container{
    background-color: black;
}
.MyBody {
    background-color: black;
}
.nav {
    text-decoration: none;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
}
.nav .nav-link, .mypage {
    font-size: 1.2em;
    color: white;
    color: yellow;
}
.nav .mypage {
    font-size: 1.5em;
    font-weight: bold;
    color: #FFD369;
}
.container {
    border: 1px solid white;
    float: left;
    margin: 50px 0px;
    left: 180px;
    width: 100vw;
    height: 200vh;
    padding: 0;
    position: relative;
    /* border: 1px solid #232323; */
}

.info {
    margin-top:2rem;
    margin-left: 1rem;
    font-weight: 200;
}
.container > h2 {
    margin-top: 30px;
    text-align: center;
}
.box {
    width: 320px;
    height: 320px;
    float: right;
    margin: 55px 0;
    margin-right: 10px;
    margin-left: 20px;
    right: 135px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container .profil {
    text-decoration: none;
    display: inline;
    background-color: rgba(35, 35, 35, 1);
    color: white;
    font-size: 20px;
    margin-left: 35px;
}
.img-poster {
    width: 320px;
    height: 320px;
    background-repeat: no-repeat;
    background-size: cover;
}
.inquire-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
`;

const Mypage = () => {
    return (
    <StyleMypage>
    <div className="MyBody">
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to="/">홈</Link>
            <Link className="nav-link mypage" aria-current="page" to="./"mypage aria-disabled>마이페이지</Link>
            {/* <Link className="nav-link" to="/infoset">회원정보수정</Link> */}
            <Link className="nav-link" to="/inquire">1:1 문의하기</Link>
        </nav>
        <div className="container">
            <BsFillPeopleFill icon={BsFillPeopleFill} size='160px' style={{border:'1px solid #eeeeee', margin:'30px 10px', backgroundColor: 'silver'}}/>
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
    </StyleMypage>
    );
}


export default Mypage;