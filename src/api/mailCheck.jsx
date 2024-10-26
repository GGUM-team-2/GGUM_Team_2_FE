import axios from 'axios';

export const mailCheck = async (mail,userNum) => {
  try {
    console.log("mail is,", mail);
    console.log("code is,",userNum);
    const intUser=parseInt(userNum, 10);
    // API 요청
    console.log("mail type:",typeof(mail));
    console.log("code type",typeof(intUser));

    const response = await axios.get('http://43.202.86.73:8080/api/v1/auth/mailCheck', {
      params: { mail: mail, userNumber : intUser} // 쿼리 파라미터로 email 추가
    });
    
    // 응답 처리
    console.log(mail);
    const result = response.data;
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
