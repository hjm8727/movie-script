import Category from "./Category";
import Menu from "./Nav";
import Trailer from "./Trailer";


const Main = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
        <Menu/>
        
        <Trailer/>
        <br/>
        <Category/>
        </div>
    );
};

export default Main;
