import React, { useState } from 'react';
import '../css/pages/ItemDetail.css'; 
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const ItemDetail = () => {
  const [isLiked, setIsLiked] = useState(false); // 하트의 상태를 관리합니다.

  const toggleLike = () => {
    setIsLiked(!isLiked); // 클릭할 때마다 하트의 상태를 토글합니다.
  };

  const navigate = useNavigate();

  const goToMain=()=>{
    navigate('/main');
  }


  return (
    <div className="item-detail-container">
      <header className="detail-header">
      <img src='/assets/back_1.svg' size={30} color="#4D7EFF" onClick={goToMain} />
      <AuctionItemHeart onClick={toggleLike}>
            {isLiked ? <FaHeart color="#4D7EFF" /> : <FaRegHeart color="#4D7EFF" />}
            <HeartCount>5</HeartCount>
          </AuctionItemHeart>
      </header>

      <div className="item-image-placeholder"></div>

      <div className="item-info">
        <div className="title-and-date">
          <p className="item-title">넷플릭스 4인팟 구해요</p>
          <p className="date-info">10월 21일 • 데이터/OTT</p>
        </div>
        <div className="price-row">
          <span className="status-badge">진행중</span>
          <div class="right-aligned-container">
            <span class="person">1인당</span>
            <span class="price">₩5,000</span>
            </div>
        </div>

        {/* 유저 정보 영역 */}
        <div className="user-info">
          <div className="profile-circle"></div>
          <div className="user-details">
            <p className="username">익명1</p>
            <p className="user-meta"><img src='/assets/detail/like.svg'/> <span>10</span>  <img src='/assets/detail/dislike.svg'/> <span>2</span></p>
          </div>
          <img className='infoarrow' src='/assets/detail/userinfo_back.svg' alt='바로가기'/>
        </div>

        <p className="description">
          넷플릭스 4인팟 구해요.
        </p>
        <p className="description">
          1인당 5,000원이고 정기 결제일은 10일입니다.
        </p>
        <ButtonContainer>
          
          <GroupStatusButton>
            <AuctionItemPeopleIcon src="/assets/people_1.svg" alt="people" />
            2/3
          </GroupStatusButton>
          <ChatButton>채팅하기</ChatButton>
        </ButtonContainer>
      </div>

    </div>
  );
};

export default ItemDetail;

const AuctionItemHeart = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬하여 하트와 카운트를 아래로 배치 */
  align-items: center;
  gap: 2px;
  font-size:25px;
  cursor: pointer; /* 클릭할 수 있도록 손 모양 커서 추가 */
  margin-right:20px;
`;

const HeartCount = styled.span`
  font-size: 12px;
  color: var(--color-point1); /* 색상 변경 */
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