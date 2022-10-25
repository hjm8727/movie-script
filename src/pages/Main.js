import Category from "./Category";
import Menu from "./Menu";
import Trailer from "./Trailer";


const Main = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
        <Menu/>
        
        <Trailer/>
        <br/>
        <Category name="추천작"/>
        <br/>
        <Category name="인기 상영작"/>
        <br/>
        <Category name="나의 시청 목록"/>
        </div>
    );
};

export default Main;
