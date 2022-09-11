import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Modal from './pages/Modal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/modal' element={<Modal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
