import React from "react";
import '../css/pages/MyPageReview.css';

function MyPageReview() {
    const handleClick = (name) => {
        console.log(`${name} clicked!`);
    };
    
    return (
        <div className="container">
            <header className="header">
                <button className="back-button" onClick={() => handleClick('back')}>&larr;</button>
                <h1>후기</h1>
                <button className="menu-button" onClick={() => handleClick('menu')}>⋮</button>
            </header>
        </div>
    )

}

export default MyPageReview;