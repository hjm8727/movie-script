import axios from "axios";
const HEADER = 'application/json';
const MOVIE_DOMAIN="http://cokebear756.synology.me:62322/api/";

const MovieApi={
    // 로그인 api
    userLogin : async function(inputId, inputPwd){
        const loginObj = {
            id : inputId,
            password : inputPwd
        }
        return await axios.post(MOVIE_DOMAIN + "member/signin", loginObj, HEADER)
    },
    // 회원가입 api
    memberReg : async function(inputId, inputPwd, inputName ,inputEmail){
        const memberObj = {
            id : inputId,
            password : inputPwd,
            name : inputName,
            email : inputEmail
        }
        return await axios.post(MOVIE_DOMAIN + "member/signup", memberObj, HEADER)
    },
    // 회원가입 여부 api
    memberRegCheck : async function(inputId){
        const regCheck = {
            id : inputId,
        }
        return await axios.post(MOVIE_DOMAIN + "IdRegCheck", regCheck, HEADER)
    },
     // 아이디 찾기 api
     findUser : async function(inputName,inputEmail){
        const finding ={
            name : inputName,
            email : inputEmail
        }
        return await axios.post(MOVIE_DOMAIN + "member/searchId", finding, HEADER)
    },
    // 비밀번호 찾기 api
    findPassword : async function(inputId, inputEmail){
        const finding ={
            id : inputId,
            email : inputEmail
        }
        return await axios.post(MOVIE_DOMAIN + "member/searchPassword", finding, HEADER)
    },
    // 비밀번호 수정 API
    setPwd : async function(id ,newPwd) {
        const setPwd = {
            id : id,
            newPwd : newPwd
        }
        return await axios.post(MOVIE_DOMAIN + "SetPwdServlet", setPwd, HEADER);
    },
    // 회원탈퇴 API
    deleteUser : async function(inputId, inputEmail, inputPwd){
        const deleteUser = {
            id : inputId,
            email : inputEmail,
            password : inputPwd
        }
        return await axios.post(MOVIE_DOMAIN + "member/delete", deleteUser,HEADER);
    }
}
export default MovieApi;
