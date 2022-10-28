import axios from "axios";
const HEADER = 'application/json';
const MOVIE_DOMAIN="http://cokebear756.synology.me:62322/api/client/";

const MovieApi={

    // 로그인 api
    userLogin : async function(inputId, inputPwd){
        const loginObj = {
            id : inputId,
            pwd : inputPwd
        }
        return await axios.post(MOVIE_DOMAIN + "LoginServlet", loginObj, HEADER)
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
    },
    findPwd : async function(id, email) {
        const findPwd = {
            id : id,
            email : email
        }
        return await axios.post(MOVIE_DOMAIN + "PwdFineServlet", findPwd, HEADER);
    }
}
export default MovieApi;
