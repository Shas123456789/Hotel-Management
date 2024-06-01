//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (  
    <div className="App">
    <Navbar /> 
    <BrowserRouter>
      <Routes>
      <Route exact path='/home' element={<Homescreen/>}/>
      <Route exact path='/book/:roomid/:fromdate/:todate' element={<Bookingscreen/>}/>
      <Route exact path='/register' element={<Registerscreen/>}/>
      <Route exact path='/login' element={<Loginscreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

