import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GlobalStyle from './css/GlobalStyle';
import Main from './pages/Main';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';
import Post from './pages/Post';
import ItemDetail from './pages/ItemDetail';
import MyPage from './pages/MyPage';
import MyPost from './pages/MyPost';
import Chatting from './pages/Chatting';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/detail" element={<ItemDetail />} /> 
            <Route path="/post" element={<Post/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/my" element={<MyPage/>} />
            <Route path="/my-post" element={<MyPost/>} />
            <Route path="/chat" element={<Chatting/>} />
          </Routes>
          <Navbar/>
        </div>
      </Router>
    </>
  );
}

export default App;
