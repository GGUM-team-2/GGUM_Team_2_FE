// Main.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuctionItem from '../components/main/AuctionItem';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SearchAll } from '../api/SearchAll';
import mockAuctionData from '../components/main/mockAuctionData';

const Main = () => {
  const { authData } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [dataList, setDataList] = useState([]); // 빈 배열로 초기화

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  const loadData = async () => {
    try {
      console.log(authData.token);
      const result = await SearchAll("GROUP_PURCHASE", "OPEN", 0, 5, authData.token);
      setDataList(result.posts || mockAuctionData); // result.posts가 없을 경우 빈 배열 설정
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const navigate = useNavigate();
  const goToPost = () => {
    navigate('/post');
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
        {dataList.map((auction, index) => (
      <AuctionItem 
      auction={{ ...auction, img: mockAuctionData[index]?.img || auction.img }} 
      key={auction.postId} 
      />
      ))}
      </AuctionList>


      <CircleButton onClick={goToPost}>
        +
      </CircleButton>
    </RecentAuctions>
  );
};

export default Main;

const RecentAuctions = styled.div`
  width: 375px;
  height: 100vh; /* 화면 전체 높이 */
  overflow-y: auto; /* 세로 스크롤 가능 */
`;

const RecentAuctionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #EFEFEF;
  padding: 0 20px;
  z-index:10;
`;

const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: var(--weight-bold);
  font-family: 'NotoSansKR', sans-serif;
  line-height: 1.4;
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
  line-height: 1.2;
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
