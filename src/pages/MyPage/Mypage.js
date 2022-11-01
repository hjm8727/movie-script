import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import styled from "styled-components";

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
    pointer-events: none;
}
.container {
    border: 5px solid #ffd369;
    margin: 0 auto;
    width: 60%;
    height: 90%;
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
    padding: 8px;
    border-radius: 15px;
}
.logout {
  float: right;
  font-size: 1.4em;
  background-color: #ffd369;
  color: #232323;
  margin-right: 0.25rem;
  padding: 7px;
  border-radius: 15px;
}
.delete-member {
    float: right;
    text-decoration: none;
    font-size: 1.4em;
    color: #232323;
    border: 3px solid #ffd369;
    border-radius: 15px;
    background-color: #ffd369;
    text-align: center;
    margin-right: -0.25rem;
}
@media screen and (max-width: 768px){
    .container {
        width: 100%;
        height: 100%;
    }
    .profil {
        width: 30%;
        height: auto;
    }
    .logout {
        width: 25%;
        height: auto;
    }
    .delete-member {
        width: auto;
        height: auto;
    }
}
`;
// 관리자 계정인지 확인
const userId = window.localStorage.getItem("userId");
    let userAdmin = false;
    if(userId === 'admin123') {
        // alert("관리자");
        userAdmin = true;
    }
// 로그아웃
const onClickLogout = () =>{
    window.localStorage.setItem("userId", "");
    window.localStorage.setItem("userPwd","");
    window.localStorage.setItem("isLogin", "false")
    window.location.replace("/");
}

/** 유저 계정 페이지 */
function UserMypage() {
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
            <Link className="profil" to="/MyPage/Infoset">회원 정보 수정</Link> 
            <h3 className="info">이름 : 지민 </h3>
            <h3 className="info">아이디 : {userId}</h3>
            <h3 className="info">이메일 : jimin600155@naver.com</h3>
            <h3 className="info">가입일 : 2022.10.19</h3>
            <br /> <br /><br />
            <Link className="delete-member" to="/MyPage/Delete">회원 탈퇴</Link>
            <br /><br />
        </div>
    </div>
    </StyleMypage>
    );
}

/** 관리자 계정 페이지 */
function AdminPage() {

  return (
    <StyleMypage>
      <div>
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to="/">홈</Link>
            <Link className="nav-link mypage" aria-current="page" to="./"mypage aria-disabled>관리자 페이지</Link>
            <Link className="nav-link" to="/MyPage/InquireList">문의 내역 확인</Link>
            <button className="logout" onClick={onClickLogout}>로그아웃</button>
        </nav>
        <div className="container">
            <br />
        </div>
    </div>
  </StyleMypage>
    );
}

const Mypage = () => {

  return (
    <div>
        {userAdmin ?
            <AdminPage /> :
            <UserMypage />
        }
    </div>
    );
}


export default Mypage;