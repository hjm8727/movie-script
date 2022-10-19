import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import SignUp from './pages/Signup'
import { BrowserRouter as Router, Route, Routers, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          {/* root = (/) path 에서 시작 */}
          <Route path='/' element={<Main/>}/> 
          {/* <Route path='/login' element={<login/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/news' element={<News/>} /> */}
        </Routes>
    </Router>
  );
}
export default App;

            