import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import './SignUp.css';
import MovieApi from '../../api/MovieApi';

const SignUpBlock=styled.div`
.page{
    position: absolute;
    top: 60px;
    bottom: 60px;
    width : 100%;
    padding: 0 20px;
    max-width: 600px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #393E46;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height : 800px; // 높이 만 추가했습니다.
}
.titleWrap{
    color: #EEEEEE;
    margin-top: 80px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
.titleWrap img{
    size: initial;
    margin-right :10px;
} 
.loginWrap{
    flex: 1;
}
.inputTitle{
    margin-top: 17px;
    font-size: 12px;
    font-weight: 500px;
    color: #EEEEEE;
}
.inputWrap{
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    border: 2px solid #EEEEEE;
}
.inputWrap:focus-within{border: 2px solid #FFD369;}
.input{
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400px;
    background-color: inherit;
    color : white;
}
.input::placeholder{color : #EEEEEE}
.error{
    margin-top: 8px;
    font-size: 12px;
    color: #FFD369;
}
.signUpButton{
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 18px;
    cursor: pointer;
    border-radius: 60px;
    background-color: #FFD369;
    color : white;
    font-weight: bold;
}
.find{
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
}
.signUpButton:disabled {background-color: #222831}
hr{
    border: 2px solid #EEEEEE;
    height: 4px;
    margin: 35px 0;
}
.logo img{
    margin-top: 20px;
    size: initial;
    margin-left :5px;
}      
img{
    width: 100px;
    height:70px;
} 
`;

const SignUp=()=>{

    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState(""); 
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    
    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isConfirmPwd, setIsConfirmPwd] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);

    const onChangeId = (e) => {
        // 회원 가입도 변수 만드신걸로 바꿔놨습니다.
        const idCurrent = e.target.value; // 변수 하나 만들어서 실시간 적용되게
        setInputId(idCurrent)
        const regId = /^[a-z]+[a-z0-9]{5,19}$/g;
        if(regId.test(idCurrent)){
            setIsId(true);
        }else{
            setIsId(false)
        }};

    const onChangePwd = (e) => {
        // passwordCurrent 변수 : 비번, 비번재확인 실시간 반영을 위해 변수 생성 
        const passwordCurrent = e.target.value;
        setInputPwd(passwordCurrent)
        const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        if(regPwd.test(passwordCurrent)){
            setIsPwd(true);
        }else{
            setIsPwd(false)
        }};
    
    const onChangeConfirmPwd = (e) => {
        const passwordCurrent = e.target.value;
        setConfirmPwd(passwordCurrent)
        if(passwordCurrent !== inputPwd){
            setIsConfirmPwd(false);
        }else{
            setIsConfirmPwd(true);
        }};

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
        const regEmail = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if(regEmail.test(inputEmail)){
            setIsEmail(true);
        }else{
            setIsEmail(false)
        }};
    const onChangeName = (e) => {
        setInputName(e.target.value);
        const regName = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
        if(regName.test(inputName)){
            setIsName(true);
        }else{
            setIsName(false)
        }};
        
    const OnClickSignUp = () => {
        if(isId && isPwd && isConfirmPwd && isName && isEmail) {
            window.localStorage.setItem("userName", isName);
            window.localStorage.setItem("userEmail", isEmail);
            window.location.replace('/Login/LoginPage');
        } else {
            alert("회원가입 실패");
        }
    }
    // 가입 버튼 누르면 가입되어 있는지 체크 후 다음 단게로 memberReg Api 통해서 OK 뜨면 위에 onClickSignUp 함수를 가져와서 로그인 화면으로 넘어가게
    const onSubmit = async () => {
        const memberCheck = await MovieApi.memberRegCheck(inputId);
        console.log(memberCheck.data.result);
        if(memberCheck.data.result === "OK"){
            console.log("가입된 아이디가 없음. 다음 단계 진행");
            const memberRegister = await MovieApi.memberReg(inputId, inputPwd, inputName, inputEmail);
            console.log(memberRegister.data.result);
            if(memberRegister.data.result === "OK") {
                OnClickSignUp();
            } else {
                alert("이미 존재한 회원이거나, 잘못 입력하셨습니다.");
            }
        } 
    }

    return(
        <SignUpBlock>
        <div className="page">
        <div className='titleWrap'><Link to ="/"><img src="/images/Logo.png" alt="Logo"/></Link>회원가입</div>
            <div className="loginWrap">
                <div className="inputTitle">아이디</div>
                <div className="inputWrap">
                        <input className="input" placeholder="아이디*" type="text" value={inputId} onChange={onChangeId}/>
                </div>
                <div className="error">{!isId && inputId.length >0 &&('6~20자 영소문자, 숫자를 사용하세요.')}</div>
                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                        <input className="input" placeholder="패스워드*" type="password" value={inputPwd} onChange={onChangePwd}/>
                </div>
                <div className="error">{!isPwd && inputPwd.length >0 &&('8~16자 영소문자, 숫자를 사용하세요.')}</div>
                <div className="inputTitle">비밀번호 재확인</div>
                <div className="inputWrap">
                <input className="input" placeholder="패스워드 재확인*" type="password" value={confirmPwd} onChange={onChangeConfirmPwd}/>
                </div>
                <div className="error">{!isConfirmPwd && confirmPwd.length >0 &&('패스워드가 일치하지 않습니다.')}</div>

                <div className="inputTitle">이름</div>
                <div className="inputWrap">
                        <input className="input" placeholder="이름*" type="text" value={inputName} onChange={onChangeName} />
                </div>
                <div className="error">{!isName && inputName.length >0 &&('한글 2글자 이상 사용하세요.')}</div>

                <div className="inputTitle">이메일</div>
                <div className="inputWrap">
                        <input className="input" placeholder="이메일*" type="email" value={inputEmail} onChange={onChangeEmail} />
                </div>
                <div className="error">{!isEmail && inputEmail.length >0 &&('올바른 이메일형식이 아닙니다.')}</div>
                <hr/>
                <div className="item"><button type="submit" className="signUpButton" onClick={onSubmit}>확인</button></div>
                </div>
                </div>
                </SignUpBlock>
    );
}
export default SignUp;