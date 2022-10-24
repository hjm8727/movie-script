import Card from 'react-bootstrap/Card';
import logo from '../../images/Logo.png';

const Like = () => {
  return (
    <Card className='box'>
      <Card.Img className='img-poster' variant="top" src={logo} />
    </Card>
  );
}

export default Like;