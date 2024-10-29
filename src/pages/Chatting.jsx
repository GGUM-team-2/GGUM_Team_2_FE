import React, { useState } from "react";
import styled from "styled-components";
// import SockJS from "sockjs-client";
import { Client as StompClient } from "@stomp/stompjs"; // `Client` 사용

const Chatting = () => {
    const [stompClient, setStompClient] = useState(null);
    const [roomId, setRoomId] = useState("1");
    const [userId, setUserId] = useState("");
    const [username, setUsername] = useState("");
    const [chat, setChat] = useState("");
    const [chatList, setChatList] = useState([]);

    // const connect = () => {
    //     // const socket = new SockJS("http://43.202.86.73:8080/ws-stomp");
    //     const client = new StompClient({
    //         webSocketFactory: () => socket,
    //         reconnectDelay: 5000, // 자동 재연결 설정
    //         heartbeatIncoming: 4000,
    //         heartbeatOutgoing: 4000,
    //     });

    //     client.onConnect = (frame) => {
    //         console.log("Connected: " + frame);
    //         setRoomId(roomId.trim());
    //         setUserId(userId.trim());
    //         setUsername(username.trim());

    //         // 채팅 메시지 수신 구독
    //         client.subscribe(`/sub/chat/room/${roomId}`, (message) => {
    //             const msg = JSON.parse(message.body);
    //             showMessage(msg);
    //         });

    //         // 유저 입장 메시지 전송
    //         const enterMessage = {
    //             userId,
    //             roomId,
    //             content: `${username} has entered the room.`,
    //             username,
    //             type: "ENTER",
    //         };
    //         client.publish({ destination: `/pub/api/v1/chat/room/${roomId}/send`, body: JSON.stringify(enterMessage) });

    //         setStompClient(client);
    //     };

    //     client.onStompError = (error) => {
    //         console.error("Connection error:", error);
    //     };

    //     client.activate();
    // };

    const showMessage = (message) => {
        setChatList((prevChats) => [...prevChats, message]);
    };

    const sendMessage = () => {
        if (chat && stompClient) {
            const chatMessage = {
                userId,
                roomId,
                content: chat,
                username,
                type: "CHAT",
            };
            stompClient.publish({ destination: `/pub/api/v1/chat/room/${roomId}/send`, body: JSON.stringify(chatMessage) });
            setChat(""); // 입력 필드 초기화
        }
    };

    const leaveRoom = () => {
        if (stompClient) {
            const leaveMessage = {
                userId,
                roomId,
                content: `${username} has left the room.`,
                username,
                type: "LEAVE",
            };
            stompClient.publish({ destination: `/pub/api/v1/chat/room/${roomId}/leave`, body: JSON.stringify(leaveMessage) });
            stompClient.deactivate();
            console.log("Disconnected");
        }
    };

    return (
        <ChatContainer>
            <ChatHeader>Real-time Chat Room</ChatHeader>
            <TopControls>
                <div>
                    <Label>User ID:</Label>
                    <Input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter your User ID" />
                </div>
                <div>
                    <Label>Username:</Label>
                    <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your chat name" />
                </div>
                <div>
                    <Label>Room ID:</Label>
                    <Input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Enter Room ID" />
                </div>
                {/* <Button onClick={connect}>Connect</Button> */}
            </TopControls>
            <MessagesContainer>
                {chatList.map((msg, idx) => (
                    <Message key={idx} className={msg.userId === userId ? "self" : "other"}>
                        <strong>{msg.username}:</strong> {msg.content}
                    </Message>
                ))}
            </MessagesContainer>
            <InputContainer>
                <MessageInput
                    type="text"
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                    placeholder="Type your message here..."
                />
                <Button onClick={sendMessage}>Send</Button>
                <Button onClick={leaveRoom}>Leave Room</Button>
            </InputContainer>
        </ChatContainer>
    );
};

export default Chatting;

// Styled Components
const ChatContainer = styled.div`
    width: 375px;
    height: 812px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const ChatHeader = styled.div`
    background-color: #4d7eff;
    color: #fff;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const TopControls = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
    flex-wrap: wrap;
    background-color: #f7f8fa;
`;

const Label = styled.label`
    font-size: 12px;
    color: #555;
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    font-size: 14px;
`;

const Button = styled.button`
    background-color: #4d7eff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #375ccc;
    }
`;

const MessagesContainer = styled.div`
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    background-color: #f7f8fa;
`;

const Message = styled.div`
    margin-bottom: 10px;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 8px;
    max-width: 80%;
    color: #333;
    background-color: #e1f5fe;

    &.self {
        align-self: flex-end;
        background-color: #4d7eff;
        color: #fff;
    }
`;

const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    background-color: #f1f1f1;
    border-top: 1px solid #ddd;
`;

const MessageInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    background-color: #fff;
`;
