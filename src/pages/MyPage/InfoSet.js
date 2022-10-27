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

    // 체크
    let isPwdCheckOk;
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
    const [isPwd, setIsPwd] = useState(false);
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

    // 현재 비밀번호는 비밀번호 확인 누를시 존재하는 비밀번호면 TRUE 아니면 FALSE
    const onClickCheck = async() => {
        console.log('비밀번호 확인');
        // DB에 있는 비밀번호랑 현재 비밀번호 입력이랑 같은지 확인 
        // 입력한 비밀번호를 API를 통해 현재 존재하는 회원인지 체크 그리고 ok면 그대로 else면 경고창
        const pwdCheck = await MovieApi.nowPwdCheck(inputPwd);
        console.log(pwdCheck.data.result); // 체크하고 OK라고 뜨면 다음 단계
        if (pwdCheck.data.result === "OK") {
            console.log("현재 비밀번호 확인 결과 DB에 존재하는 회원입니다.");
            alert("확인 완료");
            isPwdCheckOk = true;
        } else {
            isPwdCheckOk = false;
            alert("존재하지 않는 회원입니다.");
            console.log(isPwdCheckOk);
        }
    }

    const onClickSet = async () => {
        if(isPwdCheckOk && isNewPwd && isCheckPwd) {
            console.log("성공 다음 단계로 진행");
            const newPassword = await MovieApi.newPwd(inputPwd, newInputPwd);
            console.log(newPassword.data.result);
            if(newPassword.data.result === "OK") {
                window.location.replace('/');
            } else {
                console.log("수정 실패..");
            }
        }
        else {
            console.log(`패스워드 체크 : ${isPwdCheckOk}`);
            console.log(`새로운 비밀번호 : ${isNewPwd}`);
            console.log(`비밀번호 확인 :  ${isCheckPwd}`);
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
                <button className="pwd-exist" onClick={onClickCheck}>확인하기</button> 
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