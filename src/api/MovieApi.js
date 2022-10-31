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
        return await axios.post(MOVIE_DOMAIN + "FindIDServlet", finding, HEADER)
    },
    // 비밀번호 찾기 api
    findPassword : async function(inputId, inputEmail){
        const finding ={
            id : inputId,
            email : inputEmail
        }
        return await axios.post(MOVIE_DOMAIN + "Find", finding, HEADER)
    },
    // 현재 비밀번호가 존재하는지 확인하기 위한 API
    nowPwdCheck : async function(regPwd) {
        const regPwdCheck = {
            regPwd : regPwd
        }
        return await axios.post(MOVIE_DOMAIN + "RegPwdCheckServlet", regPwdCheck, HEADER);
    },
    newPwd : async function(pwd ,newPwd) {
        const setPwd = {
            pwd : pwd,
            newPwd : newPwd
        }
        return await axios.post(MOVIE_DOMAIN + "SetPwdServlet", setPwd, HEADER);
    }
}
export default MovieApi;
