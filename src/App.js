import './App.css';
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
          {/* root = (/) path 에서 시작 */}
          <Route path='/' element={<Main/>}/> 
          <Route path='/login' element={<login/>}/>
        </Routes>
    </Router>
  );
}
export default App;

            