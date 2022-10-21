import Category from "./Category";
// import MovDetail from "./MovDetail";
import Menu from "./Nav";
import Trailer from "./Trailer";

const Main = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
        <Menu/>
        
        <Trailer/>
        <br/>
        <Category/>
        <br/>
        {/* <MovDetail/> */}
        </div>
    );
};

export default Main;
