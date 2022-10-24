import { Link } from "react-router-dom";

const InfoSet = () => {
    return (
         <div>  
            <nav className="nav nav-pills nav-justified">
                <Link className="nav-link" to="/Mypage">마이페이지</Link>
                {/* <Link className="nav-link mypage" aria-current="page" to="/infoset" aria-disabled>회원정보수정</Link> */}
                <Link className="nav-link" to="/Inquire">1:1 문의하기</Link>
            </nav>
            <div className="infoset-container">
                <h1>회원정보수정</h1>
            </div>
        </div>
    );
}

export default InfoSet;


