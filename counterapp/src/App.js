import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Register' element={<Register/>}/>


    </Routes>
      
        
    </div>
  );
}

export default App;
