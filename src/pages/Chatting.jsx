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
                    <p className='topicTitle'>넷플릭스 4인팟 구해요</p>
                    <p className='price'>₩5,000</p>
                </TopicInfo>
                <StatusWrapper>
                    <span className='statusBadge'>진행중</span>
                    <div className='peopleCount'>
                        <PeopleIcon src="/assets/people_1.svg" alt="people" />
                        <PeopleText>2/3</PeopleText>
                    </div>
                </StatusWrapper>
            </ChattingTopic>
            <ChattingContainer>

                <div className='chatDate'>2024년 10월 22일 목요일</div>

                {/* 채팅 */}
                <ChatMessageContainer>
                    <SenderName>익명1</SenderName>
                    <ChatMessageWrapper>
                        <ChatBubble>
                            <Message>안녕하세요</Message>
                        </ChatBubble>
                        <MessageTime>오전 1:49</MessageTime>
                    </ChatMessageWrapper>
                </ChatMessageContainer>

                <MyChatBubbleContainer>
                    <MyChatMessageWrapper>
                        <MyMessageTime>오전 1:49</MyMessageTime>
                        <MyChatBubble>
                            <Message>안녕하세요</Message>
                        </MyChatBubble>
                    </MyChatMessageWrapper>
                </MyChatBubbleContainer>
            </ChattingContainer>
            <ChatInputContainer>
                <ChatInput placeholder="메시지 보내기" />
                <SendButton src="/assets/send.svg" alt="send" />
            </ChatInputContainer>
        </ChattingAppContainer>
    );
};

export default Chatting;

const ChattingAppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 375px;
  height: 812px;
  overflow: hidden;
  z-index: 10;
  font-family:"NotoSansKR";
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
  background-color: #ffffff;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  z-index:10;
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
  text-align:left;
  .topicTitle{

    font-weight: bold;
    margin: 0;
    margin-bottom:6px;
  }
  .price{
    font-size:18px;
    font-weight: bold;
    margin: 0;
  }
`;

const StatusWrapper = styled.div`
    margin-right:20px;
    width:50px;
    height:50px;
    display:flex;
    flex-direction:column;
    gap:6px;
    .statusBadge{
        width:45px;
        height:20px;
        font-size: 12px;
        text-align:center;
        justify-content:center;
        padding: 5px 10px;
        border-radius: 20px;
        background-color: #4D7EFF;
        color: #fff;
        margin-left: auto;
    }
    .peopleCount{
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
`

const PeopleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const PeopleText = styled.span`
  font-size: 14px;
  color: #4D7EFF;
`;

// ChattingContainer 스타일링
const ChattingContainer = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow-y: auto;
  flex: 1;
  .chatDate{
    font-size: 12px;
    color: #888;
    text-align: center;
    margin: 10px 0;
  }
`;

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const ChatMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const ChatBubble = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  display: inline-block;
  position: relative;
`;

const SenderName = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2px;
`;

const Message = styled.p`
  margin: 0;
`;

const MessageTime = styled.span`
  font-size: 10px;
  color: #888;
`;

const MyChatBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const MyChatMessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const MyChatBubble = styled(ChatBubble)`
  background-color: #4D7EFF;
  color: white;
`;

const MyMessageTime = styled(MessageTime)`
  color: #888;
`;
  
const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 30px 20px;
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  height: 76px;
  bottom: 0;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #EDF2FF;
  &::placeholder {
    color: var(--color-point1);
  }
`;

const SendButton = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
`;
