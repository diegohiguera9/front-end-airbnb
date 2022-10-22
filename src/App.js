import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modal from "./pages/Modal";
import RentElement from "./pages/RentElement";
import HomeHost from "./pages/HomeHost";
import HostingListing from "./pages/HostingListing";
import HostForm from "./pages/HostForm";
import HeaderHost from "./components/HeaderHost";
import HostingListingEditing from "./pages/HostingListingEditing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/modal" element={<Modal />} />
          <Route exact path="/rent" element={<RentElement />}>
            <Route path=":id" element={<RentElement />} />
          </Route>
          <Route exact path="/becomehost" element={<HostForm />} />
          <Route path="/hosting" element={<HeaderHost />}>
            <Route index element={<HomeHost />} />
            <Route path="listing" element={<HostingListing />} />
            <Route path="editing" >
              <Route path=":id" element={<HostingListingEditing />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
