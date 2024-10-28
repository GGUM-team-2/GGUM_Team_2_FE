import axios from 'axios';

export const BringUserId = async (token) => {
  try {
    // API 요청
    const response = await axios.get('http://43.202.86.73:8080/api/v1/auth/validateToken', {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    });

    // 응답 처리
    const result = response.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
};
