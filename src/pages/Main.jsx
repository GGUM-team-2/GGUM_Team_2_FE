// Main.js
import React, { useState } from 'react';
import styled from 'styled-components';
import mockAuctionData from '../components/main/mockAuctionData'; // import mock auction data
import AuctionItem from '../components/main/AuctionItem'; // import AuctionItem

const Main = () => {
  const [selectedFilter, setSelectedFilter] = useState('전체'); // 선택된 필터 상태

  const handleFilterClick = (filter) => {
    // 클릭된 버튼을 토글 (같은 버튼을 다시 클릭하면 선택 해제)
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  return (
    <RecentAuctions>
      <RecentAuctionsHeader>
        <img src='/assets/back_1.svg' size={30} color="#4D7EFF" />
        <HeaderTitle>공동구매</HeaderTitle>
        <img src='/assets/search_1.svg' size={30} color="#4D7EFF" />
      </RecentAuctionsHeader>

      <CategoryFilter>
        <FilterButton
          isActive={selectedFilter === '전체'}
          onClick={() => handleFilterClick('전체')}
        >
          전체
        </FilterButton>
        <FilterButton
          isActive={selectedFilter === '진행중'}
          onClick={() => handleFilterClick('진행중')}
        >
          진행중
        </FilterButton>
        <FilterButton
          isActive={selectedFilter === '완료'}
          onClick={() => handleFilterClick('완료')}
        >
          완료
        </FilterButton>
      </CategoryFilter>

      <AuctionList>
        {mockAuctionData.map((auction) => (
          <AuctionItem auction={auction} key={auction.id} />
        ))}
      </AuctionList>

      {/* Bottom Right Circle Button */}
      <CircleButton>
        +
      </CircleButton>
    </RecentAuctions>
  );
};

export default Main;

const RecentAuctions = styled.div`
  width: 375px;
`;

const RecentAuctionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #EFEFEF;
  padding: 0 20px;
`;

const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: var(--weight-bold);
  font-family: 'NotoSansKR', sans-serif;
  line-height:1.4;
  margin: 0;
`;

const CategoryFilter = styled.div`
  width: 236px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  margin: 20px;
  border-radius: 8px;
`;

const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isActive ? 'white' : '#4d7eff')};
  background-color: ${(props) => (props.isActive ? '#4d7eff' : 'transparent')};
  border: solid 1px #4d7eff;
  font-size: 14px;
  border-radius: 20px;
  width: 72px;
  height: 30px;
  cursor: pointer;
  line-height: 1.2;  /* 텍스트 줄 높이 추가 */

  /* 패딩 조정 */
  padding: 0 10px;

  &:hover {
    background-color: #4d7eff;
    color: white;
  }
`;


const AuctionList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 100px;
`;

/* 원형 버튼 */
const CircleButton = styled.button`
  position: fixed;
  bottom: 120px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: var(--color-point1);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
