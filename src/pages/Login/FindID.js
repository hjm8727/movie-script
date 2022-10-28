import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react';
import Modal from '../../util/Modal';
import MovieApi from '../../api/MovieApi';


const FindPwdBlock=styled.div`
    .find-container{
        position: absolute;
        top: 60px;
        bottom: 60px;
        width : 100%;
        padding: 0 20px;
        max-width: 600px;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #393E46;
        color: #EEEEEE;
        overflow: hidden;
        display: flex;
        flex-direction: column;
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
    color: #EEEEEE;

}
.input::placeholder{color : #dadada}
.loginButton, .findButton{
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 18px;
    cursor: pointer;
    border-radius: 60px;
    background-color: #FFD369;
    color:#222831;
    font-weight: bold;
}
hr{
    border: 2px solid #EEEEEE;
    height: 4px;
    margin: 35px 0;
}
h2{
    margin-top: 87px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
}
.findDesc{
    text-align: center;
    font-size: 14px;
}
div{
    margin-bottom: 20px;
}
`;
const FindPwd=()=>{
    let navigate = useNavigate();
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState(false);
    const onChangeId=(e)=>{
        setInputName(e.target.value);
    }
    const onchangeEmail=(e)=>{
        setInputEmail(e.target.value);
    }
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const onClickFind=async()=>{
        // 가입된 값이 있는지 확인 
        const findPassword = await MovieApi.findPassword(inputName, inputEmail);
        console.log(findPassword); //무슨값인지 확인 
        // 서버에 있는 값 읽어오기
        const id = window.localStorage.getItem('id');
        // 서버 불러온 데이터랑 입력창에 입력한거랑 같은지 확인
        if(findPassword.data.result !== setInputName&&setInputEmail){
            console.log("이름과 이메일을 다시 확인해주세요.");
            setModalOpen(true);
            setModalText("오류메세지");
        }else{
            console.log("가입한 이름, 이메일 일치합니다.");
            setModalText("아이디는"+id+"입니다.");
        } 
    }
    return(
        <FindPwdBlock>
        <div className='find-container'>
        <h2>아이디 찾기</h2>
        <div className='findDesc'>가입 시 입력하신 이름과 이메일을 통해 찾을 수 있습니다. </div>
        <div className="inputWrap"><input className="input" placeholder="이름을 입력하세요*" type="text" value={inputName} onChange={onChangeId}/></div>
        <div className="inputWrap"><input className="input" placeholder="이메일을 입력하세요*" type="email" value={inputEmail} onChange={onchangeEmail}/></div>
        <div className="item"><button type="submit" className="findButton" onClick={onClickFind}>아이디 찾기</button></div>
        <hr/>
        <div className="item"><button type="button" className="loginButton" onClick={()=>{navigate('/Login/LoginPage')}}>로그인하러 가기</button></div>
        <Modal open={modalOpen} close={closeModal} header="하린님의 아이디는">{setModalText}</Modal>
        </div>
        </FindPwdBlock>
    );
}
export default FindPwd;