import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GlobalStyle from './css/GlobalStyle';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/SignupPage" element={<SignupPage/>} />
            <Route path="/register" element={<Main/>} />
            <Route path="/" element={<Main/>} />
          </Routes>
          <Navbar/>
        </div>
      </Router>
    </>
  )
}

export default App