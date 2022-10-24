import { Link } from "react-router-dom";

const Inquire = () => {
    return (
    <div>  
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to="/">마이페이지</Link>
            <Link className="nav-link" to="/infoset">회원정보수정</Link>
        </nav>
        <form className="inquire-container">
            <h1 className='inquire-head'>1:1 문의하기</h1>
            <input type="text" placeholder='제목 입력'/>
            <label for='why'>문의 이유</label>
            <select name='why' id='why'>
                <option value="">단순 변심</option>
                <option value="">시작할 때 문제가 있음</option>
                <option value="">사이트가 맘에 들지가 않음</option>
                <option value="">개인정보 보호 문제</option>
                <option value="">광고가 너무 많음</option>
                <option value="">기타</option>
            </select>
            <input type='submit' value="제출"/>
        </form>
            <textarea placeholder="문의 내용" rows={30} cols={100}/>
    </div>
    );
}   

export default Inquire;