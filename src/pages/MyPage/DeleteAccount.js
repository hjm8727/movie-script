import styled from "styled-components";
import { useState } from "react";
import MovieApi from '../../api/MovieApi';

const DeleteBlock=styled.div`
    color: white;
`;
// 로그인된 계정인지 확인 
const userId = window.localStorage.getItem("userId");
const userPwd = window.localStorage.getItem("userPwd");

const DeleteAccount=()=>{
    const [inputId, setInputId] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    // 서버로 전송할 수 있는 조건 체크 
    const [submit, setSubmit] = useState(false);

    const onChangeId=(e)=>{
        setInputId(e.target.value);
    }
    const onChangePwd=(e)=>{
        setInputPwd(e.target.value);
    }
    const onChangeEmail=(e)=>{
        setInputEmail(e.target.value);
        isSubmit();
    }
    // 로그인된 회원이랑 입력된 아이디 같아야 서버로 전송 여부  
    const isSubmit=()=>{
        if(userId===inputId&&userPwd===inputPwd) setSubmit(true);
        // if(inputId&&inputPwd&&inputEmail) setSubmit(true);
    }
    const onSubmit=async()=> {
        const deleteUser = await MovieApi.deleteUser(inputId,inputEmail,inputPwd);
        if(submit&&deleteUser.data.statusCode === 200) {
            console.log("회원 정보가 탈퇴되었습니다.");
            alert("탈퇴됨");
            // 탈퇴되면 자동으로 로그인페이지 이동
            window.location.replace('/Login/LoginPage');
        } else {
            alert("일치하는 회원이 아닙니다.");
        }
    }
    return(
        <DeleteBlock>
            <div className='delete-container'>
            <h2>회원 탈퇴 안내</h2>
            <div>회원님의 정보보호를 위해 비밀번호를 다시한번 입력해주시기 바랍니다.</div>
            <div className="inputWrap"><input className="input" placeholder="아이디를 입력하세요*" type="text" value={inputId} onChange={onChangeId}/></div>
            <div className="inputWrap"><input className="input" placeholder="비밀번호를 입력하세요*" type="password" value={inputPwd} onChange={onChangePwd}/></div>
            <div className="inputWrap"><input className="input" placeholder="이메일을 입력하세요*" type="email" value={inputEmail} onChange={onChangeEmail}/></div>
            <button onClick={onSubmit}>확인</button>                                                        
            <hr/>
            <div>회원탈퇴시 모든 정보가 삭제되오니 신중하게 탈퇴 신청을 해주시기 바랍니다.</div>
            </div>
        </DeleteBlock>
    );

}
export default DeleteAccount;