import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;

            