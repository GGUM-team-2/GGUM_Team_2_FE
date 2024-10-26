import React, { useState } from 'react';
import '../css/pages/Post.css'; 
import styled from 'styled-components';

function Post() {
    const [count, setCount] = useState(1);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <RecentAuctionsHeader>
                <BackButton src='/assets/back_1.svg' />
                <HeaderTitle>공동구매</HeaderTitle>
            </RecentAuctionsHeader>

        <div className="container">

            <form className="purchase-form">
                <div className="image-upload">
                    <div className="image-placeholder">
                        
                    </div>
                </div>

                <label htmlFor="title">제목</label>
                <input type="text" id="title" placeholder="제목" />

                <label htmlFor="price">가격</label>
                <input type="text" id="price" placeholder="₩1인당 가격을 입력해주세요." />

                <label htmlFor="category">카테고리</label>
                <input type="text" id="category" placeholder="카테고리" />

                <div className="people-count">
                    <label htmlFor="people">인원</label>
                    <div className="people-controls">
                        <button type="button" className="minus-btn" onClick={decrementCount}>-</button>
                        <span className="people-number">{count}명</span>
                        <button type="button" className="plus-btn" onClick={incrementCount}>+</button>
                    </div>
                </div>

                <label htmlFor="content">내용</label>
                <textarea id="content" placeholder="내용을 입력하세요." />

                <button type="submit" className="submit-button">작성하기</button>
            </form>
        </div>
        </>
    );
}

export default Post;

const RecentAuctionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* HeaderTitle을 중앙에 배치 */
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 15px;
  background-color: white;
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
  left: 20px; /* 왼쪽에 고정 */
  width: 30px; /* size={30}와 같은 크기 */
  color: #4D7EFF;
`;
