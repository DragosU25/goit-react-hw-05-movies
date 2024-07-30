import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

const Header = styled.header`
  background-color: #007bff;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Main = styled.main`
  min-height: calc(100vh - 80px - 60px); // Subtracting header and footer height
  padding: 2rem;
  background-color: #f0f2f5;
`;

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <Link to="/" style={{ color: 'white' }}>
            Home
          </Link>
          <Link to="/movies" style={{ color: 'white' }}>
            Movies
          </Link>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};
