import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Style cho NavLink
const StyledNavLink = styled(NavLink)`
  color: #333;
  font-weight: 500;
  margin-left: 20px;
  transition: all 0.2s ease;

  &.active {
    color: #0d6efd;
    font-weight: 700;
  }

  &:hover {
    color: #198754;
  }
`;

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        {/* Brand bên trái */}
        <StyledNavLink className="navbar-brand fw-bold" to="/">
          Home
        </StyledNavLink>

        {/* Menu dồn hết sang phải */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <StyledNavLink className="nav-link" to="/users">
              Users
            </StyledNavLink>
          </li>
          <li className="nav-item">
            <StyledNavLink className="nav-link" to="/products">
              Products
            </StyledNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
