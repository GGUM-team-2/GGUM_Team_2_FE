import axios from 'axios';

export const mailCheck = async (mail,userNum) => {
  try {
    console.log("api is,", mail);
    
    // API 요청
    const response = await axios.get('http://43.202.86.73:8080/api/v1/auth/mailSendForSignup', {
      mail: mail,
      userNumber : userNum
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // 응답 처리
    console.log(mail);
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
