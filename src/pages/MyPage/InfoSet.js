import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieApi from "../../api/MovieApi";

const StyleInfoSet = styled.div`
margin-bottom: 6rem;
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
    pointer-events: none;
}
* {
    color: white;
}
.infoset-container {
    display: flex;
    flex-direction: column;
    /* flex-wrap: nowrap; */
    align-items: center;
    justify-content: center;
    border: 5px solid #ffd369;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 3rem;
    width: 50vw;
    height: 80vh;
}
.input:focus-within{border: 2px solid #FFD369; border-radius: 15px;}
.input-box{
    margin-top: 2rem;
    width: 35vw;
    outline: none;
    border: none;
    height: 8vh;
    font-weight: 400px;
    background-color: #232323;
    border-radius: 15px;
    margin: 0 auto;
}
.infoset-title {
    color: #ffd369;
    font-weight: bold;
    margin-top: 3rem;
    text-align: center;
}
.button-submit {
    margin-top: 3rem;
    width: 15vw;
    height: 10vh;
    background-color: #ffd369;
    color: #232323;
    border-radius: 8px;
    font-weight: bold;
    font-size: large;
}
.pwd-find {
    color: #ffd369;
    font-weight: 700;
}
.pwd-exist {
    background-color: #232323;
    color: #ffd369;
}
.hint {
    color: #ffd369;
}
span {
    color: #ffd369;
}
@media screen and (max-width: 768px) {
    .infoset-container {
        width: 90%;
        height: 100%;
    }
    .input, .input-box {
        width: 80vw;
        height: 70px;
    }
    .button-submit {
        width: 100%;
        height: auto;
    }
}
`;
const InfoSet = () => {

    let isLogin = window.localStorage.getItem('isLogin');
    if(isLogin !== 'true') {
        alert('로그인 후 이용 부탁드립니다.');
        window.location.replace('/Login/LoginPage');
    }

    // 비밀번호 찾기
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [newInputPwd, setNewInputPwd] = useState("");
    const [newPwdCheck, setNewPwdCheck] = useState("");

    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [newPwdMessage, setNewPwdMessage] = useState("");
    const [pwdCheckMessage, setPwdCheckMessage] = useState("");

    // 유효성 검사
    let [isId, setIsId] = useState(false);
    const [isNewPwd, setIsNewPwd] = useState(false);
    const [isCheckPwd, setIsCheckPwd] = useState(false);


    // 현재 아이디
    const onChangePwd = e => {
        const regPwd = /^[A-Za-z]+[A-Za-z0-9]{5,19}$/g
        const pwdCurrent = e.target.value;
        setInputId(pwdCurrent);
        if(!regPwd.test(pwdCurrent)) {
            setIdMessage('숫자 + 영문자 조합으로 5 ~ 19 자리 입력해주세요.');
            setIsId(false);
        } else {
            setIdMessage('아이디 입력 완료.');
            setIsId(true);
        }
    }

    // 새로운 비밀번호 확인
    const onChangeNewPwd = e => {
        const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
        const newPwdCurrent = e.target.value;
        setNewInputPwd(newPwdCurrent);
        // 입력한 새로운 비밀번호가 정규식에 맞지 않으면 오류 메시지 !
        if(!regPwd.test(newPwdCurrent)) {
            setNewPwdMessage('숫자 + 영문자 조합으로 8 ~ 16 자리 입력해주세요.');
            setIsNewPwd(false);
        } else {
            setNewPwdMessage('안전한 비밀번호');
            setIsNewPwd(true);
        }
    }
    // 비밀번호 확인
    const onChangeNewPwdCheck = e => {
        const newPwdCurrent = e.target.value;
        setNewPwdCheck(newPwdCurrent);
        if(newPwdCurrent !== newInputPwd) {
            setPwdCheckMessage('비밀번호가 일치하지 않습니다.');
            setIsCheckPwd(false);
        } else {
            setPwdCheckMessage('비밀번호가 일치 합니다.');
            setIsCheckPwd(true);
        }
    }

    // 현재 아이디 로그인 계정이랑 일치 하는지 확인.
    const onCheckId = () => {
        const id = window.localStorage.getItem("userId");
        if(inputId === id) {
            console.log("현재 아이디랑 로그인 계정이랑 일치함");
        } else {
            alert("현재 아이디가 일치하지 않음");
        }
    }

    // 다 트루면 비밀번호 확인 함수를 거쳐 수정 진행
    const onClickSet = async () => {
        if(isId && isNewPwd && isCheckPwd) {
            console.log("성공 다음 단계로 진행");
            onCheckId();
            const newPassword = await MovieApi.setPwd(inputId, newInputPwd);
            console.log(newPassword.data);
            if(newPassword.data.statusCode === 200) {
                window.location.replace('/');
            } else {
                console.log("수정 실패..");
            }
        }
        else {
            console.log(isId);
            alert("다시 확인 부탁드립니다.");
        }
    }

    return (
        <StyleInfoSet>
        <div>
            <nav className="nav nav-pills nav-justified">
                <Link className="nav-link" to="/">홈</Link>
                <Link className="nav-link mypage" to="/Mypage/mypage">마이페이지</Link>
                <Link className="nav-link" to="/Mypage/inquire">1:1 문의하기</Link>
            </nav>
                <h1 className="infoset-title">회원정보수정</h1>
            <div className="infoset-container">
                <h3 className="pwd-find">비밀번호 변경</h3>
                <div className="input">
                <input className="input-box" type='text' placeholder="현재 아이디 입력*" value={inputId} onChange={onChangePwd} />
                </div>
                <div className="hint">
                    {inputId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
                </div>
                <br />
                <div className="input">
                <input className="input-box" type='text' placeholder="새로운 비밀번호 입력*" value={newInputPwd} onChange={onChangeNewPwd} />
                </div>
                <div className="hint">
                    {newInputPwd.length > 0 && <span className={`message ${isNewPwd ? 'success' : 'error'}`}>{newPwdMessage}</span>}
                </div>
                <br />
                <div className="input">
                <input className="input-box" type='text' placeholder="비밀번호 확인*" value={newPwdCheck} onChange={onChangeNewPwdCheck} />
                </div>
                <div className="hint">
                    {newPwdCheck.length > 0 && <span className={`message ${isCheckPwd ? 'success' : 'error'}`}>{pwdCheckMessage}</span>}
                </div>
                    <div>
                        <button className="button-submit" onClick={onClickSet}>수정 완료</button>
                    </div>
            </div>
        </div>
        </StyleInfoSet>
    );
}

export default InfoSet;