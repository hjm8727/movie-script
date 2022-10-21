import Category from '../css/Category.css';

const myfunction = () => {
  console.log("CLICKED");
};

function CategoryA() {
  return (
    <thumbGroup>
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
      <thumb className='thm'>
        <button>
        <img className='th' variant="top" src="/images/spider.jpg" alt=""/></button>
      </thumb>
    </thumbGroup>
  );
}


export default CategoryA;
