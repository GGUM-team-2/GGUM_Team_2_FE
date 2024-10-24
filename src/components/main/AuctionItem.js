// AuctionItem.js
import React from 'react';
import styled from 'styled-components';

const AuctionItem = ({ auction }) => {
  return (
    <AuctionItemContainer>
      <AuctionItemImage src={auction.img} alt={auction.title} />
      <AuctionItemDetails>
        <FirstLine>
          <AuctionItemCategory>{auction.category}</AuctionItemCategory>
          <ActionItemSlash src="/assets/slash.svg" alt="slash" />
        </FirstLine>
        <AuctionItemTitle>{auction.title}</AuctionItemTitle>
        <AuctionItemDesc>{auction.desc}</AuctionItemDesc>
        <RefreshIconContainer>
          <RefreshIcon src="/assets/refresh.svg" alt="refresh" />
        </RefreshIconContainer>
        <AuctionItemInfoContainer>
          <AuctionItemPeopleIcon src="/assets/people.svg" alt="people" />
          <AuctionItemPrice>{auction.price}원</AuctionItemPrice>
        </AuctionItemInfoContainer>
      </AuctionItemDetails>
    </AuctionItemContainer>
  );
};

export default AuctionItem;

const AuctionItemContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  max-width:335px;
  min-height:129px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const AuctionItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const AuctionItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* 부모 요소의 너비를 100%로 설정 */
`;

const AuctionItemDesc = styled.p`
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
  color: #8B95A1;
`;

const AuctionItemCategory = styled.div`
  width: 31px;
  height: 16px;
  background-color: #1feb5913;
  color: #2bde5d;
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 14px;
`;

const AuctionItemTitle = styled.h3`
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
  margin-bottom: 6px;
`;

const AuctionItemInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const AuctionItemPeopleIcon = styled.img`
  width: 11px;
  height: 11px;
  margin-right: 3px;
`;

const AuctionItemInfo = styled.p`
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
`;

const AuctionItemPrice = styled.p`
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
  margin-left: auto;
`;

const RefreshIconContainer = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-bottom: 7px;
  margin-right: 4px;
`;

const RefreshIcon = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionItemSlash = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6px;
  height: 10px;
`;
