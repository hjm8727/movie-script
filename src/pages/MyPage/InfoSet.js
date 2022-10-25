import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleInfoSet = styled.div`
.nav {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
}
.nav .nav-link, .mypage {
    font-size: 1.2em;
    color: #ffd369;
}
.nav .mypage {
    font-size: 1.5em;
    font-weight: bold;
    color: #ffd369;
}
* {
    color: white;
}
.infoset-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 5rem;
    width: 80vw;
    height: 100vh;
}
.input-box {
    margin-top: 2rem;
    width: 25vw;
    height: 10vh;
    background-color: #eeeeee;
    color: black; 
}
.infoset-title {
    color: #ffd369;
    font-weight: bold;
    margin-bottom: 3rem;
}
.input-submit {
    margin-top: 3rem;
    width: 15vw;
    height: 10vh;
    background-color: #eeeeee;
    color: black;
}
`;

const InfoSet = () => {
    return (
        <StyleInfoSet>
         <form action="./">  
            <nav className="nav nav-pills nav-justified">
                <Link className="nav-link" to="/Mypage/mypage">마이페이지</Link>
                {/* <Link className="nav-link mypage" aria-current="page" to="/infoset" aria-disabled>회원정보수정</Link> */}
                <Link className="nav-link" to="/Mypage/inquire">1:1 문의하기</Link>
            </nav>
            <div className="infoset-container">
                <h1 className="infoset-title">회원정보수정</h1>
                <input className="input-box" type='text' placeholder="현재 비밀번호 입력" />
                <p />
                <input className="input-box" type='text' placeholder="새로운 비밀번호 입력" />
                <p />
                <input className="input-box" type='text' placeholder="비밀번호 확인" />
                <input className="input-submit" type='submit' value="완료" />
            </div>
        </form>
        </StyleInfoSet>
    );
}

export default InfoSet;