import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Category from '../css/Category.css';


const myfunction = () => {
  console.log("CLICKED");
}

function CategoryB() {
  return (
    <Carousel>
      <Carousel.Item>
      <thumbGroup style={{marginLeft: '170px', width: '500px'}} >
      <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="images/creed3.jpg" alt=""/></Link>
      </thumb>
      <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="images/thor-lt.jpg" alt="" onClick={myfunction}/></Link>
      </thumb>
      <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="images/avatar.jpg" alt=""/></Link>
      </thumb>
      <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></Link>
      </thumb>
      <thumb className='thm'>
        <Link to="/">
        <img className='th' variant="top" src="images/chain.jpg" alt=""/></Link>
      </thumb>
    </thumbGroup>
      </Carousel.Item>
      <Carousel.Item>
      <thumbGroup style={{marginLeft: '200px', width: '500px'}} >
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/thor-lt.jpg" alt="" onClick={myfunction}/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/creed3.jpg" alt=""/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/avatar.jpg" alt=""/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/chain.jpg" alt=""/></button>
      </thumb>
    </thumbGroup>
      </Carousel.Item>
      <Carousel.Item>
      <thumbGroup style={{marginLeft: '200px', width: '500px'}} >
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/thor-lt.jpg" alt="" onClick={myfunction}/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/creed3.jpg" alt=""/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/avatar.jpg" alt=""/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="/images/blackadam.jpg" alt=""/></button>
      </thumb>
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="images/chain.jpg" alt=""/></button>
      </thumb>
    </thumbGroup>
      </Carousel.Item>
    </Carousel>
  );
}

export default CategoryB;