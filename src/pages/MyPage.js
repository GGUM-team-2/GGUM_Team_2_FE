import React from 'react';
import '../css/pages/MyPage.css';

function MyPage() {
    const handleClick = (name, path) => {
        console.log(`${name} clicked!`);
    };

    return (
        <div className="container">
            <header className="header">
                <h1>마이페이지</h1>
            </header>

            <div className="user-info">
                <div className="profile-circle"></div>
                <div className="user-details">
                    <p className="username">익명1</p>
                    <p className="user-meta">👍🏻 10  👎🏻 2</p>
                </div>
            </div>

            <div className="menu-container">
                <div className="menu-item" onClick={() => handleClick('거래내역', '')}>거래내역</div>
                <div className="menu-item" onClick={() => handleClick('문의하기', '')}>문의하기</div>
                <div className="menu-item" onClick={() => handleClick('로그아웃', '')}>로그아웃</div>
            </div>
        </div>
    );
}

export default MyPage;
