import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react';
import Modal from '../../util/Modal';


const FindPwdBlock=styled.div`
    color: #EEEEEE;
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
        overflow: hidden;
        display: flex;
        flex-direction: column;
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
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return(
        <FindPwdBlock>
        <div className='find-container'>
        <h2>비밀번호 찾기</h2>
        <div className='findDesc'>가입시 입력하신 이메일을 통해 찾을 수 있습니다. </div>
        <div className="inputWrap"><input className="input" placeholder="아이디를 입력하세요*" type="text"/></div>
        <div className="inputWrap"><input className="input" placeholder="이메일을 입력하세요*" type="email"/></div>
        <div className="item"><button type="submit" className="loginButton" onClick={openModal}>비밀번호 찾기</button></div>
        <hr/>
        <div className="item"><button type="button" className="loginButton" onClick={()=>{navigate('/Login/LoginPage')}}>로그인하러 가기</button></div>
        <Modal open={modalOpen} close={closeModal} header="하린님의 비밀번호는">1234 입니다.</Modal>
        </div>
        </FindPwdBlock>
    );
}
export default FindPwd;