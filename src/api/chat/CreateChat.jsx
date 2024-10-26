// src/api/chat/CreateChat.js
import axios from 'axios';

export const CreateChat = async (title, creatorId, currentUser, postId) => {
  try {
    const intCreator = parseInt(creatorId, 10);
    const intPost = parseInt(postId, 10);

    // API 요청
    const response = await axios.post('http://43.202.86.73:8080/api/v1/chat/room', {
      roomName: title,
      creatorId: intCreator,
      userIds: currentUser, // currentUser를 전달된 파라미터로 사용
      postId: intPost
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
