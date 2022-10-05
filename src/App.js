import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modal from './pages/Modal';
import RentElement from './pages/RentElement';
import HomeHost from './pages/HomeHost';
import HostingListing from './pages/HostingListing';
import HostForm from './pages/HostForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/modal" element={<Modal />} />
          <Route exact path="/rent" element={<RentElement />} />
          <Route exact path="/hosting" element={<HomeHost />} />
          <Route exact path="/becomehost" element={<HostForm />} />
          <Route exact path="/hosting/listing" element={<HostingListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
