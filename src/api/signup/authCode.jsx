export const authCode = async ({code}) => {
    try {
  
      // API 요청
      const response = await fetch('http://43.202.86.73:8080/v1/auth/userSignup', {
        method: 'POST',
        body : {
        }
      });
  
      // 응답 처리
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        throw new Error(result.error);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  };