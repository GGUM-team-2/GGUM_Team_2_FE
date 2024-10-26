// src/components/LandingPage.js
import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { useAuth } from '../context/AuthContext';
import { login } from '../api/login/login';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { authData, saveAuthData } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();
  const goToMain=()=>{
    navigate('/main');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const result = await login(email, password);
    if (result.token) {
      saveAuthData(result);
    }
  };

  // authData가 업데이트될 때마다 값을 확인
  useEffect(() => {
    if (authData) {
      console.log('Updated authData:', authData);
      goToMain();
    }
  }, [authData]); // authData가 변경될 때마다 실행
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
            className='input-email' 
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
            className='input-password'
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="비밀번호"
          />
        </div>
        
        <div className="form-group">
          <input type="submit" className="login-btn" value={'로그인'} />
        </div>        
      </form>

      <div className="signup-link">
        <p>아직 회원이 아니신가요? <a href="/SignupPage" className='signup-color'>회원가입</a></p>
      </div>
    </div>
  );
};

export default LandingPage;
