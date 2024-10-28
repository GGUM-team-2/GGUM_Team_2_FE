// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Context 생성
const AuthContext = createContext();

// Context Provider 생성
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  // 로그인 데이터를 저장할 함수
  const saveAuthData = (data) => {
    setAuthData(data); // response에서 필요한 데이터 저장
  };

  return (
    <AuthContext.Provider value={{ authData, saveAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context를 사용하기 위한 커스텀 훅
export const useAuth = () => {
  return useContext(AuthContext);
};
