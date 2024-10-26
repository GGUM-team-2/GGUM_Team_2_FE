import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import GlobalStyle from './css/GlobalStyle';
import Main from './pages/Main';
import ItemDetail from './ItemDetail'; // 공동구매 상세정보
import Post from './Post';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Main />} />
            <Route path="/detail" element={<ItemDetail />} /> {/* 새로운 라우트 추가 */}
            <Route path="/post" element={<Post />} />
            <Route path="/" element={<ItemDetail />} /> 상세정보 = 메인
           {/*<Route path="/" element={<Post/>} /> */}
          </Routes>
          {/* <Navbar /> 항상 하단에 고정되는 Navbar */}
        </div>
      </Router>
    </>
  );
}

export default App;
