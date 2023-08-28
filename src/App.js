import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import TryNow from './components/TryNow/TryNow.jsx';
import Contact from './components/Contact/Contact.jsx';
import Results from './components/Results/Results.jsx';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path = "home" element={<Home/>} />
            <Route path = "about" element={<AboutUs/>} />
            <Route path = "trynow" element={<TryNow/>} />
            <Route path = "contact" element={<Contact/>} />
            <Route path = "results" element={<Results/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
