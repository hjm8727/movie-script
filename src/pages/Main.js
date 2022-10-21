
import CategoryB from "./CategoryB";
import Menu from "./Nav";
import Trailer from "./Trailer";
// import Modal from "./Modal";

const Main = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
        <Menu/>
        
        <Trailer/>
        <br/>
        {/* <Modal/> */}
        <br/>
        <CategoryB/>
        </div>
    );
};

export default Main;
