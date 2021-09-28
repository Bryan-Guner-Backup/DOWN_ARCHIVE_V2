import React, { useState } from 'react';
import styled from 'styled-components';
import { useOktaAuth } from '@okta/okta-react';
import { ButtonElement } from './';
import { Link } from 'react-router-dom';
import { Layout, Typography, Menu, Button } from 'antd';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authState, authService } = useOktaAuth();
  return (
    <Nav>
      <Logo>
        <Link to="/">
          City<span>Spire</span>
        </Link>
      </Logo>
      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </HamburgerMenu>
      <MenuElemnet
        isOpen={isOpen}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <MenuLink>
          <Link to="/profile-list">My Profile</Link>
        </MenuLink>
        <Button
          type="primary"
          handleClick={() => authService.logout()}
          buttonText="Logout"
        >
          LogOut
        </Button>
      </MenuElemnet>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: RGB(219, 220, 220);
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: RGB(252, 69, 67);
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

const MenuElemnet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '350px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
    justify-content: space-around;
    padding-bottom: 20px;
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #1890ff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
