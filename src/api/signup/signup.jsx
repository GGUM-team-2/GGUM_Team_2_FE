import axios from 'axios';

export const signup = async (email, username, password) => {
  try {
    console.log("api is,", email, username, password);
    
    // API 요청
    const response = await axios.post('http://43.202.86.73:8080/api/v1/auth/userSignup', {
      email: email,
      username: username,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // 응답 처리
    console.log(email);
    const result = response;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    if (error.response) {
      // 서버에서 응답한 오류 처리
      console.log(error.response);
    } else {
      // 기타 오류 처리
      console.error("Error:", error.message);
    }
  }
};
