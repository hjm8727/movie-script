import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
// import axios from "axios";
import { Link } from 'react-router-dom';

const LoginBlock=styled.div`
    background-color: black; //적용안됨 ㅡㅡ
    color: #EEEEEE;
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
}
.titleWrap{
    margin-top: 87px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
.loginWrap{
    margin-top: 20px;
    flex: 1;
}
.inputTitle{
    font-size: 12px;
    font-weight: 500px;
    color: #EEEEEE;
}
.inputWrap{
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    /* background-color: white; */
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
.input::placeholder{color : #dadada}
.error{
    margin-top: 8px;
    font-size: 12px;
    color: #FFD369;
}
.loginButton, .goButton{
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 18px;
    cursor: pointer;
    border-radius: 60px;
    background-color: #FFD369;
    color : white;
    margin: 20px 0 ;
    font-weight: bold;
}
.find{
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
}
.loginButton:disabled {background-color: #222831}
hr{
    border: 2px solid #dadada;
    /* color: #dadada; */
    height: 4px;
    margin: 40px 0;
}
.goButton{
    margin-bottom: 40px;
}

.logo img{
    margin-right: -100px;
    margin-left :40px;
}      
img{
    width: 100px;
    height:70px;
} 
`;


const LoginPage=()=>{
    let navigate = useNavigate(); 
    const [inputId, setInputId] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const [isId, setIsId] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [submit, setSubmit] = useState(true);

    const onChangeId = (e) => {
        setInputId(e.target.value);
        const regId = /^[a-z]+[a-z0-9]{5,19}$/g;
        if(regId.test(inputId)){
            setIsId(true);
        } else{
            setIsId(false);
        }};
    const onChangePwd = (e) => {
        setInputPwd(e.target.value);
        const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
        if(regPwd.test(inputPwd)){
            setIsPwd(true);
        }else{
            setIsPwd(false)
        }};

    // 유효값 충족되는지 데이터 추가될때마다 확인
    useEffect(()=>{
        if(isId&&isPwd){
            setSubmit(false);
            return;
        }setSubmit(true);
    }, [isId, isPwd]);

    return(
    <LoginBlock>
    <div className="page">
        <div className='titleWrap'><Link to ="/"><img src="../../images/Logo.png" alt="Logo"/></Link>LOGIN</div>
            <div className="loginWrap">
                <div className="inputTitle">아이디</div>
                <div className="inputWrap">
                        <input className="input" placeholder="아이디*" type="text" value={inputId} onChange={onChangeId}/>
                </div>
                <div className="error">{!isId && inputId.length >0 &&('영문자 또는 숫자 6~20자')}</div>

                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                        <input className="input" placeholder="패스워드*" type="password" value={inputPwd} onChange={onChangePwd}/>
                </div>
                <div className="error">{!isPwd && inputPwd.length >0 &&('영문자 또는 숫자 8~16자')}</div>

                <div className="auto"><input type="checkbox" value="remember"/><span>자동로그인</span></div>
                <div className="item"><button type="submit" className="loginButton" disabled={submit} onClick={()=>{navigate('/')}}>확인</button></div>
                <div className="find" onClick={()=>{navigate('/Login/FindPwd')}}>😥패스워드를 잊으셨나요?</div>
                <hr/>
                <div className="item"><button type="submit" className="goButton" onClick={()=>{navigate('/Login/SignUp')}}>회원가입</button></div>
                </div>
            </div> 
            </LoginBlock>
    );
}
export default LoginPage;