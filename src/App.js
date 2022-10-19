import logo from './logo.svg';
import './App.css';
import Main from './Movie-script/Main'
import SignUp from './Movie-script/Signup'

function App() {
  return (
    <Router>
        {/* root = (/) path 에서 시작 */}
        <Route path='/' element={<Main/>}/> 
        {/* <Route path='/login' element={<login/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/news' element={<News/>} /> */}
    </Router>
  );
}
export default App;

            