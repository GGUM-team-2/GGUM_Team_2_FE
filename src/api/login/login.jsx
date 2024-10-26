// src/api/login/login.js
import axios from 'axios';

export const login = async (email, password) => {
  try {
    console.log("api is,", email, password);
    
    // API 요청
    const response = await axios.post('http://43.202.86.73:8080/api/v1/auth/signin', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
    return response.data; // response의 data만 반환
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.log(error.response);
    } else {
      console.error("Error:", error.message);
    }
  }
};
