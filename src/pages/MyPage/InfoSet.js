import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieApi from "../../api/MovieApi";

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
    /* flex-wrap: nowrap; */
    align-items: center;
    justify-content: center;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 5rem;
    width: 50vw;
    height: 80vh;
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
    margin-top: 3rem;
    text-align: center;
}
.button-submit {
    margin-top: 3rem;
    width: 15vw;
    height: 10vh;
    background-color: #eeeeee;
    color: black;
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
@media screen and (max-width: 768px) {
    .infoset-container {
        width: 90%;
        height: 100%;
    }
    .input-box {
        width: 50%;
        height: 70px;
    }
    .button-submit {
        width: 20%;
        height: auto;
    }
}
`;
const InfoSet = () => {

    // 비밀번호 찾기
    // 키보드 입력
    const [inputPwd, setInputPwd] = useState("");
    const [newInputPwd, setNewInputPwd] = useState("");
    const [newPwdCheck, setNewPwdCheck] = useState("");

    // 오류 메시지
    const [pwdMessage, setPwdMessage] = useState("");
    const [newPwdMessage, setNewPwdMessage] = useState("");
    const [pwdCheckMessage, setPwdCheckMessage] = useState("");

    // 유효성 검사
    let [isPwd, setIsPwd] = useState(false);
    const [isNewPwd, setIsNewPwd] = useState(false);
    const [isCheckPwd, setIsCheckPwd] = useState(false);


    // 현재 비밀번호
    const onChangePwd = e => {
        const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
        const pwdCurrent = e.target.value;
        setInputPwd(pwdCurrent);
        if(!regPwd.test(pwdCurrent)) {
            setPwdMessage('숫자 + 영문자 조합으로 8 ~ 16 자리 입력해주세요.');
            setIsPwd(false);
        } else {
            setPwdMessage('입력 후 확인 버튼 클릭 부탁드립니다.');
            setIsPwd(true);
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

    // 현재 비밀번호가 로그인 계정이랑 일치 하는지 확인.
    const onCheckPwd = () => {
        const pwd = window.localStorage.getItem("userPwd");
        if(inputPwd === pwd) {
            console.log("현재 비밀번호랑 로그인 계정이랑 일치함");
        } else {
            alert("현재 비밀번호가 일치하지 않음");
        }
    }

    // 다 트루면 비밀번호 확인 함수를 거쳐 수정 진행
    const onClickSet = async () => {
        if(isPwd && isNewPwd && isCheckPwd) {
            console.log("성공 다음 단계로 진행");
            onCheckPwd();
            const newPassword = await MovieApi.newPwd(inputPwd, newInputPwd);
            console.log(newPassword.data.result);
            if(newPassword.data.result === "OK") {
                window.location.replace('/');
            } else {
                console.log("수정 실패..");
            }
        }
        else {
            console.log(isPwd);
            alert("다시 확인 부탁드립니다.");
        }
    }

    return (
        <StyleInfoSet>
         <div>
            <nav className="nav nav-pills nav-justified">
                <Link className="nav-link" to="/Mypage/mypage">마이페이지</Link>
                <Link className="nav-link" to="/Mypage/inquire">1:1 문의하기</Link>
            </nav>
                <h1 className="infoset-title">회원정보수정</h1>
            <div className="infoset-container">
                <h3 className="pwd-find">비밀번호 찾기</h3>
                <input className="input-box" type='text' placeholder="현재 비밀번호 입력" value={inputPwd} onChange={onChangePwd} />
                <div className="hint">
                    {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
                </div>
                <p />
                <input className="input-box" type='text' placeholder="새로운 비밀번호 입력" value={newInputPwd} onChange={onChangeNewPwd} />
                <div className="hint">
                    {newInputPwd.length > 0 && <span className={`message ${isNewPwd ? 'success' : 'error'}`}>{newPwdMessage}</span>}
                </div>
                <p />
                <input className="input-box" type='text' placeholder="비밀번호 확인" value={newPwdCheck} onChange={onChangeNewPwdCheck} />
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