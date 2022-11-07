import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";
import MovieApi from "../../api/MovieApi";
import { useEffect, useState } from "react";

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
    color: #ffd369;
    font-size: 2rem;
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
    margin-right: 0.5rem;
    padding: 7px;
    border-radius: 15px;

}
.delete-member {
    float: right;
    text-decoration: none;
    font-size: 1.4em;
    color: #232323;
    border: 1px solid white;
    border-radius: 15px;
    background-color: #ffd369;
    text-align: center;
    margin-right: -0.25rem;
    padding: 2px;

}
.container-system {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 70%;
    height: 100%;
    text-align: center;
}
table, th, tr, td {
    border: 1px solid #ffd369;
}
h1 {
    text-align: center;
    margin: 3rem 0;
    color: #ffd369;
    font-weight: bold;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}
.select-member {
    margin: 0 1.4rem;
}
button {
    border: 2px solid silver;
    background-color: #232323;
    color: #ffd369;
    height: 50px;
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
    .container-system {
        width: 100%;
        height: 100%;
    }
    table, tr, td {
        width: 100%;
        height: 100%;
    }
    .num, .name, .id, .time, .email, .pwd {
        width: 10%;
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

    let isLogin = window.localStorage.getItem('isLogin');
    if(isLogin !== 'true') {
        alert('로그인 후 이용 부탁드립니다.');
        window.location.replace('/Login/LoginPage');
    }

const [memberSelect, setMemberSelect] = useState('');
useEffect(() => {

        const memberInfo = async () => {
        try {
            const response = await MovieApi.memberSelect(userId); // 현재 회원만 조회
            // console.log(response.data.results.id);
            console.log(response.data.results.id);
            setMemberSelect(response.data.results);
        } catch(e) {
            console.log(e);
        }
    };
    memberInfo();
}, []);

return (
    <StyleMypage>
        <div>
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to="/">홈</Link>
            <Link className="nav-link mypage" aria-current="page" to="./"mypage aria-disabled>마이페이지</Link>
            <Link className="nav-link" to="/MyPage/Inquire">1:1 문의하기</Link>
        </nav>
        <div className="container">
            <BsFillPersonFill size='160px' style={{border:'1px solid silver', margin:'30px 10px', backgroundColor: '#232323', color: '#ffd369'}}/>
            <button className="logout" style={{marginTop: '1rem'}} onClick={onClickLogout}>로그아웃</button>
            <br />
            <Link className="profil" to="/MyPage/Infoset">회원 정보 수정</Link> 
                <div key={memberSelect.id}>
                    <h3 className="info">이름  : {memberSelect.name}</h3>
                    <h3 className="info">아이디 : {memberSelect.id}</h3>
                    <h3 className="info">이메일 : {memberSelect.email}</h3>
                    <h3 className="info">가입일 : {memberSelect.create_time}</h3>
                </div>
            <br /><br />
            <Link className="delete-member" to="/MyPage/DeleteAccount">회원 탈퇴</Link>
            <br/><br />
        </div>
    </div>
    </StyleMypage>
    );
}

/** 관리자 계정 페이지 */
function AdminPage() {

    const [memberInfo, setMemberInfo] = useState('');
    let [number, setNumber] = useState(10);

    const onClickButton = () => {
        setNumber(number + 10);
        if(number >= 30) {
            alert('더 이상 조회 가능한 회원이 없습니다.');
            return number === 29;
        }
        console.log(number);
    }
    const onClickButton2 = () => {
        setNumber(number - 10);
    }
    const onClickButtonAll = () => {
        setNumber(number + 30);
    }
    const onClickButtonAll2 = () => {
        setNumber(number === 0);
    }
    useEffect(() => {
        const memberSelect = async () => {
            try {
                const response = await MovieApi.memberInfo()
                console.log(response.data.results);
                setMemberInfo(response.data.results);
            } catch(e) {
                console.log(e);
            }
        }
        memberSelect();
    }, []);
    
    const Tbody = () => (
        memberInfo && memberInfo.map((member, index) => (
            <tbody key={member.id}>
                {index < number ?
                    <tr>
                        <td className="num">{member.id}</td>
                        <td className="name">{member.name}</td>
                        <td className="id">{member.member_id}</td>
                        <td className="pwd">{member.password}</td>
                        <td className="email">{member.email}</td>
                        <td className="time">{member.create_time}</td>
                    </tr> :
                    <></>}
            </tbody>
        )));

    return (
    <StyleMypage>
    <div>
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to="/">홈</Link>
            <Link className="nav-link mypage" aria-current="page" to="./"mypage aria-disabled>관리자 페이지</Link>
            <Link className="nav-link" to="/MyPage/InquireList">문의 내역 확인</Link>
            <button className="logout" onClick={onClickLogout}>로그아웃</button>
        </nav>
            <h1>회원 목록 조회</h1>
        <div className="container-system">
            <table>
                <thead>
                    <tr>
                        <th>회원 번호</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>패스워드</th>
                        <th>이메일</th>
                        <th>가입일</th>
                    </tr>
                </thead>
                <Tbody />
            </table>
        </div>
        <div className="button">
            <button className="select-member" onClick={onClickButton}>회원 더 보기</button>
            {number === 10 ? <button className="select-member">회원 덜 보기</button>:
            <button className="select-member" onClick={onClickButton2}>회원 덜 보기</button>
            }
            <button className="select-member" onClick={onClickButtonAll}>회원 전체 보기</button>
            <button className="select-member" onClick={onClickButtonAll2}>회원 전체 닫기</button>
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