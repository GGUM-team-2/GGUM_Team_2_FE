import React from 'react';
import '../css/pages/Home.css';
import searchIcon from '../search1.png';
import cartIcon from '../cart 1.png';
import handIcon from '../open-hand 1.png';
import Logo from '../logo.png';

function Home() {
    return (
        <div className="container">
            <header className="headerbox">
                <header className='header'>
                <input type="text" className="search-bar" placeholder="" />
                <button className="search-button">
                <img src={searchIcon} alt="search" className="search-img"/>
                </button>
                </header>
                <div className="title-section">
                <img src={Logo} alt="logo" className="logo-img"/><br/>
                <h1 className="title">쉐어인캣</h1>
                <p className="subtitle">함께 사고 나누는 대학생 생활 편의 서비스</p>
            </div>
            </header>

            <div className="button-section">
                <button className="action-button">
                    <img src={cartIcon} alt="cart" className="cart-img"/>
                    <span className="button-text">공동구매</span>
                </button>
                <button className="action-button">
                    <img src={handIcon} alt="hand" className="hand-img"/>
                    <span className="button-text">나눔</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
