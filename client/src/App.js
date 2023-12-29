import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Output from './components/output';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/output' element={<Output/>}/>
  </Routes>
  </BrowserRouter>
  );
}


export default App;
