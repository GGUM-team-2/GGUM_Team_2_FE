import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './landingpage.css';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="landing-page">
      <div className="app-info">
        <h1 className="app-title">쉐어인캣</h1>
        <p className="app-description">함께 사고 나누는 대학생 생활 편의 서비스</p>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="이메일"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="비밀번호"
          />
        </div>
        <div className="form-group">
          <div className="forgot-password">
          <a href="">비밀번호 찾기</a>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" className="login-btn" value={'로그인'}/>
          </div>        
      </form>

      <div className="signup-link">
        <p>아직 회원이 아니신가요? <a href="/SignupPage">회원가입</a></p>
      </div>
    </div>
  );
};

export default LandingPage;
