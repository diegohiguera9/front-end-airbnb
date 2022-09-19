import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Modal from './pages/Modal';
import RentElement from './pages/RentElement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/modal' element={<Modal/>}/>
          <Route exact path='/rent' element={<RentElement/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
