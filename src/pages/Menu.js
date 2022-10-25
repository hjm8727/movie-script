import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width : 1400px;
    background-color: black;
    color: white;
    a{
        text-decoration: none;
        color: white;
    }
    ul li{
        list-style: none;
        // 보류
        margin: 0;
        padding: 0;
    }
    .logo img{
        margin-left :15px;
        margin-top: 10px;
        size: initial; // 로고 원본크기 유지만 수정했습니다.
    }      
    img {
        width: 95px;
        height:70px;
    } 
    // 카테고리 드롭다운 
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    .dropdown{
        position : relative;
        display : inline-block; 
        list-style:none; 
        margin:1px;
        /* margin-left: -250px; */
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
        width: 150px;
        padding: 15px;
        margin:0;
        margin-left: -20px;
    }

    .dropdown-content li{
        display : block;
        text-decoration : none;
        color : white;
        font-size: 18px;
        padding : 12px 5px;
    }

    .dropdown-content :hover{
        color: #FFD369;
    }

    .dropdown:hover .dropdown-content {
        display: block;
        z-index: 5;
    }
    //검색창
    .search{
        margin: 0;
        padding: 0;
        display: inline-block;
        float: left;
        width: 900px;   
    }
    .search option{
        position : absolute;
        z-index : 1; /*다른 요소들보다 앞에 배치*/
        font-weight: 400;
    }
    select{
        background-color: black;
        width: 100px;
        height: 50px;
        color :white;
        font-size: 20px;
        border :none;
        z-index: 5;
        margin-right:20px;
    }
    .category{
        width: 140px;
        height: 30px;
    }
    
    .search-box{
        padding: 10px;
        border-radius: 15px;
        border:1px solid #FFD369;
        width: 450px;
        font-size: 13px;
        line-height: 10px;
        margin-right: 10px;

    }
    // 검색 버튼
    .submit {
        box-sizing: border-box;
        background-color: black;
        border: 2px solid #FFD369;
        border-radius: 0.6em;
        color: #FFD369;
        cursor: pointer;
        /* display: flex; */
        font-size: 1rem;
        font-weight: 400;
        line-height: 0;
        margin-top: 5px;
        /* margin-right: 10px; */
        padding: 1.2em 2.8em;
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;

        &:active {
            // 눌렀을때 색 변경
            background-color: #FFD369;
            color: black;
            outline: 0;
        }
        &:hover {
        box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
        position: relative;
        }
    }

    // 아이콘 드롭다운
    .dropdown-icon{
        position : relative;
        display : inline-block; 
        list-style:none; 
        margin-top: 20px;
        font-weight: 400;
        cursor : pointer;
        font-size : 20px;
        margin-right: -75px;
    }
    .dropdown-content-icon{
        display : none;
        position : absolute;
        z-index : 1; /*다른 요소들보다 앞에 배치*/
        font-weight: 400;
        background-color: black;
        color: white;
        width: 120px;
        padding: 15px;
        margin-left: -32px;
    }

    .dropdown-content-icon li{
        display : block;
        text-decoration : none;
        color : white;
        font-size: 18px;
        padding : 10px 5px;
    }

    .dropdown-content-icon :hover{
        color: #FFD369;
    }

    .dropdown-icon:hover .dropdown-content-icon {
        display: block;
    }
    .dropbtn-icon img {
        height:40px;
        width:35px;
    }
    .category .optionItem:hover {
  background: rgb(175, 93, 93);
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

                <li class="search">
                    <select class="category" required>선택
                        <option class="optionItem" value="" disabled selected>선택</option>
                        <option class="optionItem" value="title">제목</option>
                        <option class="optionItem" value="acter">배우</option>
                        <option class="optionItem" value="master">감독</option>
                        <option class="optionItem" value="">??</option>
                    </select>   
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
                    <p class="dropbtn-icon"><img src="images/mem.png" alt="icon"/></p>
                    <ul class="dropdown-content-icon">
                        <li><Link to ="/MyPage/Mypage">My Page</Link></li>
                        <li><Link to ="/Login/LoginPage">로그인</Link></li>
                        <li><Link to ="/MyPage/Inquire">고객센터</Link></li>
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