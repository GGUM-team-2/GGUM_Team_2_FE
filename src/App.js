import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GlobalStyle from './css/GlobalStyle';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';

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
          </Routes>
          {/* <Navbar /> 항상 하단에 고정되는 Navbar */}
        </div>
      </Router>
    </>
  )
}

export default App