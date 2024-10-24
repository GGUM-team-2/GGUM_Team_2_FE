import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GlobalStyle from './css/GlobalStyle';
import Main from './pages/Main';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Main/>} />
          </Routes>
          {/* <Navbar /> 항상 하단에 고정되는 Navbar */}
        </div>
      </Router>
    </>
  )
}

export default App