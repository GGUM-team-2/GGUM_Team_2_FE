import React, { useState } from 'react';
import '../css/pages/Post.css'; 
import styled from 'styled-components';
import { CobuyPost } from '../api/post/CobuyPost';
import { useAuth } from '../context/AuthContext';

function Post() {
    const [count, setCount] = useState(1);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const { authData, saveAuthData } = useAuth();

    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => count > 1 && setCount(count - 1);

    const initcobuyPost = async (e) => {
        e.preventDefault();
        console.log(title, content, price, category, count);

        if (!authData || !authData.token) {
            console.error("User is not authenticated.");
            return;
        }

        // CobuyPost 호출 시 token 전달
        const result = await CobuyPost(title, content, price, category, count, authData.token);

        if (result) {
            saveAuthData(result.postId);
            console.log("Post created with ID:", result.postId);
        }
    };

    return (
        <>
            <RecentAuctionsHeader>
                <BackButton src='/assets/back_1.svg' />
                <HeaderTitle>공동구매</HeaderTitle>
            </RecentAuctionsHeader>

            <div className="container">
                <div className="purchase-form">
                    <div className="image-upload">
                        <div className="image-placeholder"></div>
                    </div>

                    <label htmlFor="title">제목</label>
                    <input type="text" id="title" placeholder="제목" onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="price">가격</label>
                    <input type="text" id="price" placeholder="₩1인당 가격을 입력해주세요." onChange={(e) => setPrice(e.target.value)} />

                    <label htmlFor="category">카테고리</label>
                    <input type="text" id="category" placeholder="카테고리" onChange={(e) => setCategory(e.target.value)} />

                    <div className="people-count">
                        <label htmlFor="people">인원</label>
                        <div className="people-controls">
                            <button type="button" className="minus-btn" onClick={decrementCount}>-</button>
                            <span className="people-number">{count}명</span>
                            <button type="button" className="plus-btn" onClick={incrementCount}>+</button>
                        </div>
                    </div>

                    <label htmlFor="content">내용</label>
                    <textarea id="content" placeholder="내용을 입력하세요." onChange={(e) => setContent(e.target.value)} />

                    <button type="submit" className="submit-button" onClick={initcobuyPost}>작성하기</button>
                </div>
            </div>
        </>
    );
}

export default Post;


const RecentAuctionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 15px;
`;

const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: var(--weight-bold);
  font-family: 'NotoSansKR', sans-serif;
  line-height: 1.4;
  margin: 0;
`;

const BackButton = styled.img`
  position: absolute;
  left: 20px;
  width: 30px;
  color: #4D7EFF;
`;
