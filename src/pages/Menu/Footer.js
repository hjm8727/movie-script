import styled from "styled-components"

const Foo = styled.div`
    text-align: center;
    color: white;
    background-color: #222831;
    /* margin-top: 57px; */
p{
    font-size: 15px;
    margin: 0;
}
img{
    margin: 5px;
    width: 80px;
    height: 60px;
}
h2{
    font-size: 25px;
    color :#FFD369;
}
    
`
const Footer = () => {

    return(
        <Foo>
            <img src="/images/Logo.png" alt="Logo"/>
            <h2>Contact MovieScript</h2>
            <p>Master : <span>하정목 : Seoul GangNam Center</span></p>
            <p>Engineer : <span>김성탁 : North Pole CokeBear</span></p>
            <p>Manager : <span>김승렬 : KH Academy</span></p>
            <p>Cute Voice : <span>지민 : Cave</span></p>
            <p>Engineering College Yeosin : <span>박하린 : Engineer College</span></p>
        </Foo>
    )
}

export default Footer;