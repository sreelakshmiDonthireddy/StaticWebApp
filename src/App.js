import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Employeelist from './employeelist';
import Empcreate from './empcreate';
import Empdetails from './Empdetails';
import Empedit from './Empedit';
function App() {
  return (
    <div className="App">
      <h1>React js</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Employeelist/>}></Route>
        <Route path='/employee/create' element={<Empcreate/>}></Route>
        <Route path='/employee/detail/:empid' element={<Empdetails/>}></Route>
        <Route path='/employee/edit/:empid' element={<Empedit/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
