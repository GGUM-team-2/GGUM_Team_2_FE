// src/api/post/CobuyPost.js
import axios from 'axios';

export const CobuyPost = async (title, content, price, category, participant, token) => {
  try {
    const intPrice=parseInt(price, 10);
    console.log(title, content, price, category, participant, token);
    console.log("token is :", token);
    console.log("title type:", typeof(title));
    console.log("content type:", typeof(content));
    console.log("price type:", typeof(intPrice));
    console.log("category type:", typeof(category));
    console.log("participant type:", typeof(participant));
    console.log("token type:", typeof(token));
    
    // API 요청
    const response = await axios.post('http://43.202.86.73:8080/api/v1/post/', {
      "title": title,
      "content": content,
      "price": intPrice,
      "category": category,
      "postType": "GROUP_PURCHASE",
      "participant_limit": participant
    }, {
      headers: { Authorization: `Bearer ${token}` } // 인증 헤더로 토큰 전달
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
