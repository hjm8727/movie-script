import axios from "axios";
const HEADER = 'application/json';
const MOVIE_DOMAIN="http://localhost:8090/kh_movie_project/";

const MovieApi={
    userLogin : async function(inputId, inputPwd){
        const loginObj = {
            id : inputId,
            pwd : inputPwd
        }
        return await axios.post(MOVIE_DOMAIN + "LoginServlet", loginObj, HEADER)
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