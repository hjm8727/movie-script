import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width : 100%;
    background-color: black;
    color: white;
    a{
        text-decoration: none;
        color: white;
    }
    ul li{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .logo img{
        margin-right: -100px;
        margin-left :40px;
    }      
    img{
        width: 100px;
        height:70px;
    } 
    // 카테고리 드롭다운 
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    .dropdown{
        position : relative;
        display : inline-block; 
        list-style:none; 
        margin:1px;
        margin-left: -120px;
        margin-top: 20px;
        font-weight: 400;
        cursor : pointer;
        font-size : 20px;
    }
    .dropdown-content{
        display : none;
        position : absolute;
        z-index : 1; /*다른 요소들보다 앞에 배치*/
        font-weight: 400;
        background-color: black;
        color: white;
        width: 230px;
        padding: 15px;
        margin:0;
        margin-left: -17px;

    }

    .dropdown-content li{
        display : block;
        text-decoration : none;
        color : white;
        font-size: 18px;
        padding : 12px 5px;
        
    }

    .dropdown-content :hover{
        color: yellow;
    }

    .dropdown:hover .dropdown-content {
        display: block;
        z-index: 5;
    }
    //검색창
    .serch{
        margin: 0;
        padding: 0;
    }
    .search-box{
        margin-top: 5px;
        margin-left: -100px;
        padding: 10px;
        border-radius: 15px;
        border:1px solid yellow;
        width: 500px;
        float: left;
        font-size: 13px;
        line-height: 10px;
        margin-right: 15px;
    }
    // 검색 버튼
    .submit {
        box-sizing: border-box;
        background-color: black;
        border: 2px solid #f1c40f;
        border-radius: 0.6em;
        color: #f1c40f;
        cursor: pointer;
        display: flex;
        font-size: 1rem;
        font-weight: 400;
        line-height: 0;
        margin-top: 5px;
        padding: 1.2em 2.8em;
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;

        &:hover,
        &:focus {
            color: #fff;
            outline: 0;
        }
    }
    
    // 아이콘 드롭다운
    .dropdown-icon{
        position : relative;
        display : inline-block; 
        list-style:none; 
        margin:1px;
        margin-left: -120px;
        margin-top: 20px;
        font-weight: 400;
        cursor : pointer;
        font-size : 20px;
    }
    .dropbtn-icon{
  
    }
    .dropdown-content-icon{
        display : none;
        position : absolute;
        z-index : 1; /*다른 요소들보다 앞에 배치*/
        font-weight: 400;
        background-color: black;
        color: white;
        width: 230px;
        padding: 15px;
        margin:0;
        margin-left: -17px;

    }

    .dropdown-content-icon li{
        display : block;
        text-decoration : none;
        color : white;
        font-size: 18px;
        padding : 12px 5px;
  
    }

    .dropdown-content-icon :hover{
        color: yellow;
    }

    .dropdown-icon:hover .dropdown-content-icon {
        display: block;
    }
`;


const Menu = () => {
    return (
        <Container>
            <ul class="navbar">
                <li class="logo"><Link to ="/"><img src="images/Logo.png" alt="Logo"/></Link></li>
            
                
                <li class="dropdown">카테고리
                    <p class="dropbtn"></p>
                    <ul class="dropdown-content">
                        <li><Link to ="/">카테고리1</Link></li>
                        <li><Link to ="/">카테고리2</Link> </li>
                        <li><Link to ="/">카테고리3</Link></li>
                    </ul>
                </li>


                <li class="serch">
                        <input class="search-box" type="text"></input>
                        <button class="submit">search</button>
                </li>
                
                {/* <li class="dropdown-icon">
                    <p class="dropbtn-icon"><img src="images/Bell3.png" alt="icon"/></p>
                    <ul class="dropdown-content-icon">
                        <li><Link to ="/MyPage/Mypage">My page</Link></li>
                        <li><Link to ="/">고객센터</Link></li>
                        <li><Link to ="/">로그아웃</Link></li>
                    </ul>
                </li> */}
                <li class="dropdown-icon">
                    <p class="dropbtn-icon"><img src="images/Bell3.png" alt="icon"/></p>
                    <ul class="dropdown-content-icon">
                        <li><Link to ="/MyPage/Mypage">My page</Link></li>
                        <li><Link to ="/Login/LoginPage">로그인</Link></li>
                        <li><Link to ="/">고객센터</Link></li>
                    </ul>
                </li>
                
                {/* <li class="icon-guest">
                    <ul class="icon-dropbox">
                        <li><Link to ="/">로그인</Link></li>
                        <li><Link to ="/">고객센터</Link></li>
                    </ul>
                </li> */}
            </ul>
        </Container>
    );
}

export default Menu;