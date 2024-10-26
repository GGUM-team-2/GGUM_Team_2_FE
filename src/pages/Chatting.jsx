import React from 'react';
import styled from 'styled-components';

const Chatting = () => {
    return (
        <ChattingAppContainer>
            <RecentAuctionsHeader>
                <img src='/assets/back_1.svg' size={30} color="#4D7EFF" />
                <HeaderTitle>채팅</HeaderTitle>
                <img src='/assets/exit.svg' size={30} color="#4D7EFF" />
            </RecentAuctionsHeader>
            <ChattingTopic>
                <ImagePlaceholder />
                <TopicInfo>
                    <TopicTitle>넷플릭스 4인팟 구해요</TopicTitle>
                    <Price>₩5,000</Price>
                </TopicInfo>
                <StatusBadge>진행중</StatusBadge>
                <PeopleCount>
                    <PeopleIcon src="/assets/people_1.svg" alt="people" />
                    <PeopleText>2/3</PeopleText>
                </PeopleCount>
            </ChattingTopic>
            <ChattingContainer>
                <ChatDate>2024년 10월 22일 목요일</ChatDate>
                <ChatBubble>
                    <SenderName>익명1</SenderName>
                    <Message>안녕하세요</Message>
                    <MessageTime>오전 1:49</MessageTime>
                </ChatBubble>
                <MyChatBubble>
                    <Message>안녕하세요</Message>
                    <MessageTime>오전 1:49</MessageTime>
                </MyChatBubble>
            </ChattingContainer>
            <ChatInputContainer>
                <ChatInput placeholder="메시지 보내기" />
                <SendButton src="/assets/send_icon.svg" alt="send" />
            </ChatInputContainer>
        </ChattingAppContainer>
    );
};

export default Chatting;

const ChattingAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 375px;
  height: 812px;
  overflow: hidden;
`;

const RecentAuctionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #EFEFEF;
  padding: 0 20px;
  box-sizing: border-box;
`;

const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: var(--weight-bold);
  font-family: 'NotoSansKR', sans-serif;
  line-height: 1.4;
  margin: 0;
`;

// ChattingTopic 스타일링
const ChattingTopic = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd;
  border-radius: 8px;
  margin-right: 10px;
`;

const TopicInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TopicTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Price = styled.p`
  font-weight: bold;
  color: #555;
  margin: 0;
`;

const StatusBadge = styled.span`
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #4D7EFF;
  color: #fff;
  margin-left: auto;
`;

const PeopleCount = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const PeopleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const PeopleText = styled.span`
  font-size: 12px;
  color: #4D7EFF;
`;

// ChattingContainer 스타일링
const ChattingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  flex: 1;
`;

const ChatDate = styled.div`
  font-size: 12px;
  color: #888;
  text-align: center;
  margin: 10px 0;
`;

const ChatBubble = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 5px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
`;

const SenderName = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Message = styled.p`
  margin: 0;
`;

const MessageTime = styled.span`
  font-size: 10px;
  color: #888;
  text-align: right;
`;

const MyChatBubble = styled(ChatBubble)`
  background-color: #4D7EFF;
  color: white;
  align-self: flex-end;
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #eee;
  background-color: #f9f9f9;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
`;

const SendButton = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
`;
