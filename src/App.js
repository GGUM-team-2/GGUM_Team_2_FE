import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GlobalStyle from './css/GlobalStyle';
import Main from './pages/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
          <Navbar/>
        </div>
      </Router>
    </>
  )
}

export default App