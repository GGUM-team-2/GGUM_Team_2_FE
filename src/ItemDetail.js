import React from 'react';
import './ItemDetail.css'; 

const ItemDetail = () => {
  return (
    <div className="item-detail-container">
      <header className="detail-header">
        <button className="back-button">←</button>
        <button className="like-button">♡</button>
      </header>

      <div className="item-image-placeholder"></div>

      <div className="item-info">
        <div className="title-and-date">
          <p className="item-title">넷플릭스 4인팟 구해요</p>
          <p className="date-info">10월 21일 • 데이터/OTT</p>
        </div>
        <div className="price-row">
          <span className="status-badge">진행중</span>
          <div class="right-aligned-container">
            <span class="person">1인당</span>
            <span class="price">₩5,000</span>
            </div>
        </div>

        {/* 유저 정보 영역 */}
        <div className="user-info">
          <div className="profile-circle"></div>
          <div className="user-details">
            <p className="username">익명1</p>
            <p className="user-meta">👍🏻 10  👎🏻 2</p>
          </div>
        </div>

        <p className="description">
          넷플릭스 4인팟 구해요.
        </p>
        <p className="description">
          1인당 5,000원이고 정기 결제일은 10일입니다.
        </p>
        <button className="group-status">2/3</button>
        <button className="chat-button">채팅하기</button>
      </div>

    </div>
  );
};

export default ItemDetail;
