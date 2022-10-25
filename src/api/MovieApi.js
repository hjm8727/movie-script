import axios from "axios";
const HEADER = 'application/json';
const MOVIE_DOMAIN="http://localhost:8090/Movie_login/";

const MovieApi={
    userLogin : async function(inputId, inputPwd){
        const loginObj = {
            id : inputId,
            pwd : inputPwd
        }
        return await axios.post(MOVIE_DOMAIN + "login", loginObj, HEADER)
    }
}
export default MovieApi;