import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import Mypage from './pages/MyPage/Mypage';
import LoginPage from './pages/Login/LoginPage';
import SignUp from './pages/Login/SignUp';
import FindPwd from './pages/Login/FindPwd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/MyPage/Mypage' element={<Mypage />} />
        <Route path='/Login/LoginPage' element={<LoginPage/>}/>
        <Route path='/Login/SignUp' element={<SignUp/>}/>
        <Route path='/Login/FindPwd' element={<FindPwd/>}/>
      </Routes>
    </Router>
  );
}
export default App;