import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import Mypage from './pages/MyPage/Mypage';
import LoginPage from './pages/Login/LoginPage';
import SignUp from './pages/Login/SignUp';
import FindPwd from './pages/Login/FindPwd';
import InfoSet from './pages/MyPage/InfoSet';
import Inquire from './pages/MyPage/Inquire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/MyPage/Mypage' element={<Mypage />} />
        <Route path='/MyPage/InfoSet' element={<InfoSet />} />
        <Route path='/MyPage/Inquire' element={<Inquire />} />
        <Route path='/Login/LoginPage' element={<LoginPage/>}/>
        <Route path='/Login/SignUp' element={<SignUp/>}/>
        <Route path='/Login/FindPwd' element={<FindPwd/>}/>
      </Routes>
    </Router>
  );
}
export default App;