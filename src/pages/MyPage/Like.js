import Card from 'react-bootstrap/Card';
import test from './images/test.jpg';

const Like = () => {
  return (
    <Card className='box'>
      <Card.Img className='img-poster' variant="top" src={test} />
    </Card>
  );
}

export default Like;