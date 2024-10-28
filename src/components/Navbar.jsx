// Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../assets/nav/home.svg';
import { ReactComponent as HomeInactiveIcon } from '../assets/nav/gray_home.svg';
import { ReactComponent as MessageIcon } from '../assets/nav/message.svg';
import { ReactComponent as MessageInactiveIcon } from '../assets/nav/gray_message.svg';
import { ReactComponent as MyIcon } from '../assets/nav/my.svg';
import { ReactComponent as MyInactiveIcon } from '../assets/nav/gray_my.svg';

const Navbar = () => {
  const [active, setActive] = useState('홈');
  const navigate = useNavigate();

  const handleClick = (name, path) => {
    setActive(name);
    navigate(path);
  };

  return (
    <NavbarContainer>
      <NavItem onClick={() => handleClick('홈', '/main')}>
        {active === '홈' ? <HomeIcon /> : <HomeInactiveIcon />}
      </NavItem>
      <NavItem onClick={() => handleClick('채팅', '/chatlist')}>
        {active === '채팅' ? <MessageIcon /> : <MessageInactiveIcon />}
      </NavItem>
      <NavItem onClick={() => handleClick('마이', '/my')}>
        {active === '마이' ? <MyIcon /> : <MyInactiveIcon />}
      </NavItem>
    </NavbarContainer>
  );
};

export default Navbar;

// Styled-components
const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 275px;
  height: 70px;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 5;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
