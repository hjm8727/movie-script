import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieApi from "../../api/MovieApi";
import Modal from "../../util/Modal";

const StyleList = styled.div `
  margin:0 auto;
  box-sizing: border-box;
  color: white;
  
  .container {
    margin-top: 3rem;
    display: flex;
    border: 5px solid #eeeeee;
    width: 50%;
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
  }
  .var {
    font-size: 2.5em;
    font-weight: bold;
    color: #ffd369;
    pointer-events: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
}
.nav {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    color: #ffd369;
}
.nav-link {
  font-size: 1.35em;
    color: white;
    color: #ffd369;
}
table,th, td {
  border: 1px solid #ffd369;
}
`;


const InquireList = () => {

  const userId = window.localStorage.getItem("userId");
  if(userId !== 'admin123') {
    alert('관리자 페이지입니다.');
    window.location.replace('/');
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [inquireInfo, setInquireInfo] = useState('');

const closeModal = () => {
  setModalOpen(false);
}

  useEffect(() => {
    const inquireData = async () => {
      try {
        const response = await MovieApi.inquireInfo(); // 전체 리스트 조회
        setInquireInfo(response.data.results);
        console.log(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    inquireData();
  }, []);

    return (
        <StyleList>
          <div>
            <nav className="nav nav-pills nav-justified">
              <Link className="nav-link" to="/">홈</Link>
              <Link className="nav-link" aria-current="page" to="/MyPage/Mypage"mypage aria-disabled>관리자 페이지</Link>
            </nav>
            <Link className="var" aria-current="page" to="./"mypage aria-disabled>문의 내역</Link>
            <div className="container">
              <table>
                <thead>
                  <tr>
                    <th>회원 아이디</th>
                    <th>문의 제목</th>
                    <th>문의 날짜</th>
                  </tr>
                </thead>
                {inquireInfo && inquireInfo.map(info => (
                  <tbody key={info.id}>
                    <tr>
                      <td>{info.member_id}</td>
                      <td onClick={() => {setModalText(info);setModalOpen(true);}}>{info.qna_title}</td>
                      <td>{info.create_time}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
                <Modal open={modalOpen} close={closeModal}>----------------- 문의 내용 -----------------<br /><div style={{color: 'white'}}>{modalText.qna_content}</div></Modal>
            </div>
          </div>
        </StyleList>
    )
}

export default InquireList;