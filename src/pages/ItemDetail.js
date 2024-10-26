import React, { useEffect, useState } from 'react';
import '../css/pages/ItemDetail.css'; 
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { CreateChat } from '../api/chat/CreateChat';
import { useAuth } from '../context/AuthContext';
import { BringLike } from '../api/detail/BringLike';
import { BringDisLike } from '../api/detail/BringDisLike';
import { BringUserId } from '../api/detail/BringUserId';

const ItemDetail = () => {
  const { authData } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [like,setLike]=useState(0);
  const [dislike,setDislike]=useState(0);
  const [currentUser,setCurrentUser]=useState(0);

  // 전달된 auction 객체를 가져옴
  const auction = location.state?.auction;
  useEffect(()=>{
    getLike();
  },[])
  if (!auction) {
    return <div>데이터를 불러오는 데 오류가 발생했습니다.</div>;
  }

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const goToMain = () => {
    navigate('/main');
  };

  const newChat = async () => {
    try {
      // BringUserId가 비동기 함수이므로 await로 결과를 기다림
      const currentId = await BringUserId(authData.token);
      const currentUserArray = [currentId]; // currentId가 원소인 배열 생성
      console.log("Current User Array:", currentUserArray);
  
      if (currentId != null) {
        console.log(auction.title, auction.userId, currentUserArray,auction.postId);
        await CreateChat(auction.title, auction.userId, currentUserArray,auction.postId).then(navigate("/chat",{ state: { currentUserArray }}));
      }


    } catch (error) {
      console.error("Failed to create chat:", error);
    }
  };
  
  

  const getLike = async () => {
    try {
      const response = await BringLike(authData.token);
      setLike(response.likeCount);
      setDislike(response.dislikeCount);
    } catch (error) {
      console.error("Failed to load like/dislike data:", error);
    }
  };

  // const getDisLike=()=>{
  //   setDislike(BringDisLike(authData.token)[0]);
  //   console.log(dislike);
  // }
  return (
    <div className="item-detail-container">
      <header className="detail-header">
        <img src='/assets/back_1.svg' size={30} color="#4D7EFF" onClick={goToMain} />
        <AuctionItemHeart onClick={toggleLike}>
          {isLiked ? <FaHeart color="#4D7EFF" /> : <FaRegHeart color="#4D7EFF" />}
          <HeartCount>{like}</HeartCount>
        </AuctionItemHeart>
      </header>

      <div className="item-image-placeholder"></div>

      <div className="item-info">
        <div className="title-and-date">
          <p className="item-title">{auction.title}</p>
          <p className="date-info">{auction.date} • {auction.postType}</p>
        </div>
        <div className="price-row">
          <span className="status-badge">{auction.postStatus}</span>
          <div className="right-aligned-container">
            <span className="person">1인당</span>
            <span className="price">₩{auction.price}</span>
          </div>
        </div>

        {/* 유저 정보 영역 */}
        <div className="user-info">
          <div className="profile-circle"></div>
          <div className="user-details">
            <p className="username">{auction.username}</p>
            <p className="user-meta">
              <img src='/assets/detail/like.svg' alt="like" /> <span>{like}</span>
              <img src='/assets/detail/dislike.svg' alt="dislike" /> <span>{dislike}</span>
            </p>
          </div>
          <img className='infoarrow' src='/assets/detail/userinfo_back.svg' alt='바로가기' />
        </div>

        <p className="description">{auction.description}</p>
        <ButtonContainer>
          <GroupStatusButton>
            <AuctionItemPeopleIcon src="/assets/people_1.svg" alt="people" />
            {auction.participantCount}/{auction.participantLimit}
          </GroupStatusButton>
          <ChatButton onClick={newChat}>채팅하기</ChatButton>
        </ButtonContainer>
      </div>
    </div>
  );
};

export default ItemDetail;

const AuctionItemHeart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size:25px;
  cursor: pointer;
  margin-right:20px;
`;

const HeartCount = styled.span`
  font-size: 12px;
  color: var(--color-point1);
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 25px;
  width: 100%;
  display: flex;
  max-width: 500px;
`;

const GroupStatusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  width: 85px;
  height: 35px;
  color: var(--color-point1);
  background: none;
  border: none;
  margin-top: 11.5px;
  margin-right:6px;
  gap: 5px;
`;

const ChatButton = styled.button`
  background-color: #4D7EFF;
  color: white;
  border: none;
  padding: 10px 50px;
  border-radius: 10px;
  cursor: pointer;
  width: 250px;
  height:58px;
  font-size: 21px;
`;

const AuctionItemPeopleIcon = styled.img`
  width: 35px;
  height: 35px;
`;
