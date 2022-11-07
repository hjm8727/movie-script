import Card from 'react-bootstrap/Card';

// DB에 이미지가 없을시 보여주기 위한 박스
function NoImage() {
  return (
    <Card style={{ width: '245px', height: '320px', backgroundColor: 'FFD369'}}>
      <Card.Body>
      <img src="/images/Logo.png" alt="Logo"/>
        <Card.Title>이미지를 찾을수 없습니다.</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default NoImage;