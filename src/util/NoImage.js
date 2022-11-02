import Card from 'react-bootstrap/Card';

function NoImage() {
  return (
    <Card style={{ width: '245px', height: '320px', backgroundColor: 'FFD369'}}>
      <Card.Body>
        <Card.Title>이미지를 찾을수 없습니다.</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default NoImage;