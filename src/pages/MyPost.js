import React, { useState } from 'react';
import '../css/pages/MyPost.css';

function MyPage() {
    // activeTab 상태를 useState를 통해 선언
    const [activeTab, setActiveTab] = useState("게시물");

    const handleClick = (name) => {
        console.log(`${name} clicked!`);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // 탭 클릭 시 활성 탭 변경
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button" onClick={() => handleClick('back')}>&larr;</button>
                <h1>마이페이지</h1>
                <button className="menu-button" onClick={() => handleClick('menu')}>⋮</button>
            </header>

            <div className="user-info-1">
                <div className="profile-circle"></div>
                <div className="user-details">
                    <p className="username">콩알</p>
                    <p className="user-meta">
                        <span> 👍🏻 10 </span>
                        <span>👎🏻 2 </span>
                    </p>
                </div>
            </div>

            <div className="tab-menu">
                <div
                    className={`tab-item ${activeTab === "게시물" ? "active" : ""}`}
                    onClick={() => handleTabClick("게시물")}>게시물
                </div>
                <div
                    className={`tab-item ${activeTab === "찜" ? "active" : ""}`}
                    onClick={() => handleTabClick("찜")}>찜
                </div>
            </div>
        </div>
    );
}

export default MyPage;
