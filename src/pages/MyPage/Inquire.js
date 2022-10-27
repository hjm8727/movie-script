import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleInquire = styled.div`
/* 1:1 문의하기 페이지 css */
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
.inquire-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100vh;
    color: white;
    margin: 0 auto;
    padding: 3rem 0;
    border: 1px solid #eeeeee;
}
.inquire {
    margin: 1rem 0;
    width: 40vw;
}
.content {
    width: 40vw;
    height: 80vh;
    background-color: #eeeeee;
}
.inquire-submit {
    width: 15vw;
    height: 10vh;
    margin: 1rem 0;
}
.inquire-head {
    margin-bottom: 3rem;
    font-weight: bold;
    color: #ffd369;
    text-align: center;
}
.inquire-text {
    font-size: 20px;
    color: #ffd369;
}
`;

const Inquire = () => {
    return (
    <StyleInquire>
        <div>  
            <nav className="nav nav-pills nav-justified">
                <Link className="nav-link" to="/MyPage/mypage">마이페이지</Link>
                <Link className="nav-link" to="/MyPage/infoset">회원정보수정</Link>
            </nav>
                <h1 className='inquire-head'>1:1 문의하기</h1>
            <form className="inquire-container">
                    <label for='why' className="inquire-text">문의 이유를 선택해주세요.</label>
                    <select name='why' id='why' className="inquire">
                      <option value="">단순 변심</option>
                      <option value="">시작할 때 문제가 있음</option>
                      <option value="">사이트가 맘에 들지가 않음</option>
                      <option value="">개인정보 보호 문제</option>
                      <option value="">광고가 너무 많음</option>
                      <option value="">기타</option>
                    </select>
                    <p />
                    <textarea className="content" placeholder="문의 내용" rows={50} cols={50}/>
                    <p />
                    <input type='submit' value="제출" className="inquire-submit"/>
            </form>
        </div>
    </StyleInquire>
    );
}   

export default Inquire;