import React, { useState } from 'react';
import './Post.css';

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
        <div className="container">
            <header>
                <button className="back-button">←</button>
                <h1>공동구매</h1>
            </header>

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
    );
}

export default Post;
