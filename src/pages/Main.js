import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div>    
            <h1>Movie Script</h1>
            <p>movie script 메인 페이지 입니다.</p>
            <Link to="/detail">상세 페이지 이동</Link>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/ask">고객센터</Link>
            <Link to="/mypage">마이페이지</Link>
            


            
        </div>
    )
}
export default Main;
