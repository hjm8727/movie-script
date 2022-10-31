import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import styled from "styled-components";
import Card from 'react-bootstrap/Card';

const StyleMypage = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    color: white;

.nav {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
}
.nav .nav-link, .mypage {
    font-size: 1.2em;
    color: white;
    color: #ffd369;
}
.nav .mypage {
    font-size: 1.5em;
    font-weight: bold;
    color: #ffd369; 
}
.container {
    border: 5px solid #ffd369;
    margin: 0 auto;
    width: 60vw;
    height: 80vh;
}

.info {
    margin-top:2rem;
    margin-left: 1rem;
    font-weight: 200;
}
.container .profil {
    text-decoration: none;
    display: inline;
    background-color: #ffd369; 
    color: #232323;
    font-size: 1.5em;
    margin-left: 10px;
    padding: 9px;
}
.logout {
  float: right;
  font-size: 1.4em;
  background-color: #ffd369;
  color: #232323;
  margin-top: 1rem;
  margin-right: 0.25rem;
  padding: 7px;
}
`;
const userId = window.localStorage.getItem("userId");
const userPwd = window.localStorage.getItem("userPwd");

const Mypage = () => {
    const onClickLogout = () =>{
      window.localStorage.setItem("userId", "");
      window.localStorage.setItem("userPwd","");
      window.localStorage.setItem("isLogin", "false")
      window.location.replace("/");
  }

  return (
    <StyleMypage>
      <div>
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to="/">홈</Link>
            <Link className="nav-link mypage" aria-current="page" to="./"mypage aria-disabled>마이페이지</Link>
            <Link className="nav-link" to="/MyPage/Inquire">1:1 문의하기</Link>
        </nav>
        <div className="container">
            <BsFillPeopleFill icon={BsFillPeopleFill} size='160px' style={{border:'1px solid #eeeeee', margin:'30px 10px', backgroundColor: 'black'}}/>
            <button className="logout" onClick={onClickLogout}>로그아웃</button>
            <br />
            <Link className="profil" to="/MyPage/Infoset">회원정보수정</Link> 
            <h3 className="info">이름 : 지민 </h3>
            <h3 className="info">가입일 : 2022.10.19</h3>
            <h3 className="info">이메일 : jimin600155@naver.com</h3>
            <h3 className="info">아이디 : {userId}</h3>
            <br />
        </div>
    </div>
  </StyleMypage>
    );
}


export default Mypage;