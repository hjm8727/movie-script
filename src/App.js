import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import Mypage from './pages/MyPage/Mypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/MyPage/Mypage' element={<Mypage />} />
      </Routes>
    </Router>
  );
}
export default App;