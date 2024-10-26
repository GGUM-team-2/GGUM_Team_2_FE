// AuctionItem.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AuctionItem = ({ auction }) => {
  const [isLiked, setIsLiked] = useState(false); // 하트의 상태를 관리합니다.

  const toggleLike = () => {
    setIsLiked(!isLiked); // 클릭할 때마다 하트의 상태를 토글합니다.
  };

  const navigate = useNavigate();

  const goToDetail=()=>{
    navigate('/detail');
  }
  return (
    <AuctionItemContainer onClick={goToDetail}> 
      <AuctionItemImage alt={auction.title} />
      {/* src={auction.img} */}
      <AuctionItemDetails>
        <AuctionItemHeader>
          <AuctionItemTitle>
            {auction.title}
            <AuctionItemDesc>{auction.desc}</AuctionItemDesc>
          </AuctionItemTitle>
          <AuctionItemHeart onClick={toggleLike}>
            {isLiked ? <FaHeart color="#4D7EFF" /> : <FaRegHeart color="#4D7EFF" />}
            <HeartCount>{auction.likeCount}</HeartCount>
          </AuctionItemHeart>
        </AuctionItemHeader>
        <AuctionItemInfoContainer>
          <PeopleInfo>
            <AuctionItemPeopleIcon src="/assets/people_1.svg" alt="people" />
            <PeopleCount>2/3</PeopleCount>
          </PeopleInfo>
          <AuctionItemPrice>\{auction.price}</AuctionItemPrice>
        </AuctionItemInfoContainer>
        <AuctionStatus status={auction.status}>{auction.status}</AuctionStatus>
      </AuctionItemDetails>
    </AuctionItemContainer>
  );
};

export default AuctionItem;

const AuctionItemContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 315px;
  height: 109px;
  padding: 10px;
  margin: 0 20px 15px 0px;
  box-shadow: 0 4px 8px rgba(0.2, 0.2, 0.2, 0.2);
  border-radius: 8px;
`;

const AuctionItemImage = styled.img`
  width: 110px !important;
  height: 110px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 10px;
  background-color: gray;
`;

const AuctionItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 205px;
  justify-content: space-between;
  position: relative;
`;

const AuctionItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuctionItemTitle = styled.h3`
  font-size: 14px;
  font-family: 'NotoSansKR', sans-serif;
  font-weight: bold;
  margin: 0;
  text-align: left;
`;

const AuctionItemHeart = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬하여 하트와 카운트를 아래로 배치 */
  align-items: center;
  gap: 2px;
  size:20px;
  cursor: pointer; /* 클릭할 수 있도록 손 모양 커서 추가 */
`;

const HeartCount = styled.span`
  font-size: 12px;
  color: var(--color-point1); /* 색상 변경 */
`;

const AuctionItemDesc = styled.p`
  font-size: 12px;
  font-family: 'NotoSansKR', sans-serif;
  font-weight: 300;
  color: #8B95A1;
  margin: 0;
  text-align: left;
  margin-top: 6px;
`;

const AuctionItemInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const PeopleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0; /* 아이콘과 텍스트 사이의 간격 제거 */
`;

const AuctionItemPeopleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const PeopleCount = styled.p`
  font-size: 12px;
  font-family: 'NotoSansKR', sans-serif;
  color: #4D7EFF;
  margin: 0;
  margin-left: 5px;
`;

const AuctionStatus = styled.span`
  background-color: ${(props) => (props.status === '완료' ? 'var(--color-point2)' : '#4D7EFF')};
  color: white;
  width: 55px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  font-size: 12px;
  font-family: 'NotoSansKR', sans-serif;
  position: absolute;
  right: 0;
  bottom: 30px;
`;

const AuctionItemPrice = styled.p`
  font-size: 15px;
  font-family: 'NotoSansKR', sans-serif;
  font-weight: bold;
  color: #000;
  margin-left: 10px;
  margin-bottom: 0;
  position: relative;
`;
