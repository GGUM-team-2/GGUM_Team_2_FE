import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as StompJs from "@stomp/stompjs";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Chatting = () => {
    const location = useLocation();
    const currentUserArray = location.state?.currentUserArray;
    const currentUser = currentUserArray[0];
    const param = useParams(); // 채팅방 식별자
    const chatroomId = param.chatroomId;
    const token = JSON.stringify(window.localStorage.getItem("token")); // 로그인된 사용자의 토큰

    const [client, setClient] = useState(null); // WebSocket 클라이언트
    const [isConnected, setIsConnected] = useState(false); // 연결 상태 확인 변수
    const [chat, setChat] = useState(""); // 사용자가 입력한 채팅 메시지
    const [chatList, setChatList] = useState([]); // 수신된 채팅 메시지 리스트

    const userId = useSelector((state) => state.user.userCode); // 현재 로그인한 사용자 ID
    const navigate = useNavigate();

    useEffect(()=>{
      connect();
    },[])
    // WebSocket 연결
    const connect = () => {
        const client = new StompJs.Client({
            brokerURL: "ws://localhost:3000/chat",
            connectHeaders: { login: "", passcode: "" },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        client.onConnect = () => {
            client.subscribe(`/sub/chat/room/${chatroomId}`, callback);
            setIsConnected(true); // 연결 상태 업데이트
        };

        client.onStompError = () => {
            setIsConnected(false); // 연결 실패 시 상태 업데이트
        };

        client.activate();
        setClient(client); // WebSocket 클라이언트 설정
    };

    // WebSocket 연결 해제 - 퇴장 메시지 전송
    const disConnect = () => {
        if (client && isConnected) {
            // 퇴장 메시지 생성
            const leaveMessage = {
                userId: userId,
                roomId: chatroomId,
                content: `${currentUser}님이 퇴장하셨습니다.`,
                username: currentUser,
                type: "LEAVE"
            };
            client.publish({
                destination: `/pub/chat/room/${chatroomId}/leave`,
                body: JSON.stringify(leaveMessage),
            });
            client.deactivate();
            setIsConnected(false); // 연결 해제 시 상태 업데이트
        }
    };

    // 메시지 수신 콜백
    const callback = (message) => {
        if (message.body) {
            const msg = JSON.parse(message.body);
            setChatList((chats) => [...chats, msg]); // 메시지 추가
        }
    };

    // 메시지 전송
    const sendChat = () => {
        if (!chat || !isConnected || !client) return; // 연결 상태 확인
        client.publish({
            destination: `/pub/chat/room/${chatroomId}/send`,
            body: JSON.stringify({
                userId: userId,
                roomId: chatroomId,
                content: chat,
                username: currentUser,
                type: "CHAT"
            }),
        });
        setChat(""); // 입력 필드 초기화
    };

    useEffect(() => {
        connect(); // 컴포넌트 마운트 시 연결
        return () => disConnect(); // 언마운트 시 연결 해제 시 퇴장 메시지 전송
    }, []);

    // 메시지 입력 핸들러
    const onChangeChat = (e) => setChat(e.target.value);

    // form 전송 핸들러
    const handleSubmit = (event) => {
        event.preventDefault();
        sendChat();
    };

    return (
        <ChattingAppContainer>
            <RecentAuctionsHeader>
                <img src='/assets/back_1.svg' onClick={() => navigate(-1)} alt="Back" />
                <HeaderTitle>채팅</HeaderTitle>
                <img src='/assets/exit.svg' onClick={() => navigate('/chatlist')} alt="Exit" />
            </RecentAuctionsHeader>
            <ChattingTopic>{/* 토픽 정보 UI */}</ChattingTopic>
            <ChattingContainer>
                <div className="chatDate">2024년 10월 22일 목요일</div>
                {chatList.map((msg, idx) => (
                    msg.userId !== userId ? (
                        <ChatMessageContainer key={idx}>
                            <SenderName>{msg.username}:</SenderName>
                            <ChatMessageWrapper>
                                <ChatBubble>
                                    <Message>{msg.content}</Message>
                                </ChatBubble>
                                <MessageTime>{msg.time}</MessageTime>
                            </ChatMessageWrapper>
                        </ChatMessageContainer>
                    ) : (
                        <MyChatBubbleContainer key={idx}>
                            <MyChatMessageWrapper>
                                <MyMessageTime>{msg.time}</MyMessageTime>
                                <MyChatBubble>
                                    <Message>{msg.content}</Message>
                                </MyChatBubble>
                            </MyChatMessageWrapper>
                        </MyChatBubbleContainer>
                    )
                ))}
            </ChattingContainer>
            <ChatInputContainer onSubmit={handleSubmit}>
                <ChatInput
                    placeholder="메시지 보내기"
                    value={chat}
                    onChange={onChangeChat}
                    onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                />
                <SendButton src="/assets/send.svg" onClick={sendChat} alt="send" />
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
