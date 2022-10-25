import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import black from './SignUp.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";


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
    // 로고 위치만 수정했습니다.
    margin-top: 20px;
    size: initial;
    margin-left :5px;
}      
img{
    width: 100px;
    height:70px;
} 
`;

const memberObj={
    id : "",
    pwd : "",
    confirmPwd : "",
    email : "",
};

const SignUp=()=>{

    const [resData, setResData] = useState('');

    const onSubmit =async ()=>{
        memberObj.id = inputId; //useState를 통해서 만들어진 값을 객체에 넣음
        memberObj.pwd = inputPwd; 
        memberObj.confirmPwd = confirmPwd; 
        memberObj.email = inputEmail; 
        // 데이터 날리기
        try{
            const res = await axios.post("http://localhost:3000/posts", memberObj,'application/json');
            setResData(res.data); //값이 들어오면 나타남

        }catch(e){
            console.log(e);
        }
    }
    
    let navigate = useNavigate(); 
    const [inputId, setInputId] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState(""); 
    const [inputEmail, setInputEmail] = useState("");
    const [isId, setIsId] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isConfirmPwd, setIsConfirmPwd] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [submit, setSubmit] = useState(true);

    const onChangeId = (e) => {

        // 정규식
        setInputId(e.target.value);
        console.log(inputId);
        const regId = /^[a-z]+[a-z0-9]{5,19}$/g;
        if(!regId.test(inputId)){
            setIsId(false);
        } else {
            setIsId(true);
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
            if(passwordCurrent !==inputPwd){
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
    useEffect(()=>{
        if(isId&&isPwd&&isConfirmPwd&&isEmail){
            setSubmit(false);
            return;
        }setSubmit(true);
    }, [isId, isPwd, isConfirmPwd,isEmail]);    

    return(
        <SignUpBlock>
        <div className="page">
        <div className='logo'><Link to ="/"><img src="../../images/Logo.png" alt="Logo"/></Link></div>
        <div className='titleWrap'>회원가입</div>
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
                <div className="inputTitle">비밀번호 재확인</div>
                <div className="inputWrap">
                <input className="input" placeholder="패스워드 재확인*" type="password" value={confirmPwd} onChange={onChangeConfirmPwd}/>
                </div>
                <div className="error">{!isConfirmPwd && confirmPwd.length >0 &&('패스워드가 일치하지 않습니다.')}</div>
                <div className="inputTitle">이메일</div>
                <div className="inputWrap">
                        <input className="input" placeholder="이메일*" type="email" value={inputEmail} onChange={onChangeEmail} />
                </div>
                <div className="error">{!isEmail && inputEmail.length >0 &&('올바른 이메일형식이 아닙니다.')}</div>
                <hr/>

                <div className="item"><button type="submit" className="loginButton" disabled={submit}>확인</button></div>
                <div><button>가입 모달</button></div>
                <button className='data' onClick={onSubmit}>전송</button>
                {resData && <textarea rows={7} value={JSON.stringify(resData, null, 2)} readOnly={true}/>}
                </div>
                </div>
                </SignUpBlock>
    );
}
export default SignUp;