import Category from "./Category";
import Menu from "./Menu";
import Trailer from "./Trailer";


const Main = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
        <Menu/>
        
        <Trailer/>
        <br/>
        <Category/>
        <br/>
        <Category/>
        </div>
    );
};

export default Main;
