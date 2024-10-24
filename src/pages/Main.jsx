// Main.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaSearch } from 'react-icons/fa'; // Arrow and search icons
import mockAuctionData from '../components/main/mockAuctionData'; // import mock auction data
import AuctionItem from '../components/main/AuctionItem'; // import AuctionItem

const Main = () => {
  const [selectedFilter, setSelectedFilter] = useState(null); // 선택된 필터 상태

  const handleFilterClick = (filter) => {
    // 클릭된 버튼을 토글 (같은 버튼을 다시 클릭하면 선택 해제)
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  return (
    <RecentAuctions>
      <RecentAuctionsHeader>
        <FaArrowLeft size={20} color="#4D7EFF" /> {/* Left arrow */}
        <HeaderTitle>공동구매</HeaderTitle> {/* Center title */}
        <FaSearch size={20} color="#4D7EFF" /> {/* Search icon */}
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
  padding: 0 15px;
`;

const HeaderTitle = styled.h2`
  font-size: 17px;
  font-weight: bold;
  font-family: 'Pretendard', sans-serif;
  margin: 0;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  padding: 10px;
  border-radius: 8px;
`;

const FilterButton = styled.button`
  color: ${(props) => (props.isActive ? 'white' : '#4d7eff')};
  background-color: ${(props) => (props.isActive ? '#4d7eff' : 'transparent')};
  border: solid 1px #4d7eff;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #4d7eff;
    color: white;
  }
`;

const AuctionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
`;
