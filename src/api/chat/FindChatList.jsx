// src/api/post/CobuyPost.js
import axios from 'axios';

export const FindChatList = async (userid) => {
    try {
      const response = await axios.get(`http://43.202.86.73:8080/api/v1/chat/user/${userid}/rooms`, {
        params: { postTypeFilter: 'GROUP_PURCHASE' }
      });
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
      return []; // 에러 발생 시 빈 배열 반환
    }
  };
  
