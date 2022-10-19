import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CategoryA() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>영화 제목</Card.Title>
          <Card.Text>
            영화 사진은 어떻게 연결하지...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">개봉일</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>영화 제목</Card.Title>
          <Card.Text>
            이미지로만 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">개봉일</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>영화 제목</Card.Title>
          <Card.Text>
            가득 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">개봉일</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>영화 제목</Card.Title>
          <Card.Text>
            채울
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">개봉일</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>영화 제목</Card.Title>
          <Card.Text>
            것인가
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">개봉일</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>영화 제목</Card.Title>
          <Card.Text>
            고민중
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">개봉일</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CategoryA;