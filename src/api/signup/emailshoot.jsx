import axios from 'axios';

export const emailshoot = async (email) => {
  try {
    console.log("api is,", email);
    
    // API 요청
    const response = await axios.post('http://43.202.86.73:8080/api/v1/auth/mailSendForSignup', null, { // 두 번째 매개변수는 null로 설정
      params: { mail: email } // 쿼리 파라미터로 email 추가
    });
    
    // 응답 처리
    const result = response.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    if (error.response) {
      // 서버에서 응답한 오류 처리
      console.log(error.response.data);
    } else {
      // 기타 오류 처리
      console.error("Error:", error.message);
    }
  }
};
