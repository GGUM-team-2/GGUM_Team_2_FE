import React from 'react';
import '../css/pages/MyPage.css';

function MyPage() {
    const handleClick = (name) => {
        console.log(`${name} clicked!`);
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button" onClick={() => handleClick('back')}>&larr;</button>
                <h1>마이페이지</h1>
            </header>

            <div className="user-info-1">
                <div className="profile-circle"></div>
                <div className="user-details">
                    <p className="username">익명1</p>
                    <p className="user-meta">👍🏻 10  👎🏻 2</p>
                </div>
            </div>

            <div className="tab-menu">
                
            </div>

            <div className="tab-item">
                <button className="tab active">전체</button>
                <button className="tab">공동구매</button>
                <button className="tab">나눔</button>
            </div>
        </div>
    );
}

export default MyPage;
