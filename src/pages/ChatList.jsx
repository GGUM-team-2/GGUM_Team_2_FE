// Main.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuctionItem from '../components/main/AuctionItem';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SearchAll } from '../api/SearchAll';
import { FindChatList } from '../api/chat/FindChatList';
import { BringUserId } from '../api/detail/BringUserId';
import ChatingItem from '../components/main/ChatingItem';

const ChatList = () => {
  const { authData } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [dataList, setDataList] = useState([]); // 빈 배열로 초기화

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  const loadData = async () => {
    try {
      const result = await BringUserId(authData.token);
      console.log("UserId: ", result);
      
      // FindChatList 함수에서 반환된 데이터를 dataList에 설정
      const chatList = await FindChatList(result);
      setDataList(chatList || []); // chatList가 undefined인 경우 빈 배열로 설정
      console.log("Chat List: ", chatList);
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
        <HeaderTitle>채팅</HeaderTitle>
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
        {dataList.map((auction,index) => (
          <ChatingItem dataList={dataList[index]} key={auction.postId} />
        ))}
      </AuctionList>
    </RecentAuctions>
  );
};

export default ChatList;

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
  z-index:10;
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
