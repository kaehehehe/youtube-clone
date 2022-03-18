import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80px;
  height: 100vh;
  background-color: var(--back-color);
  color: var(--white-color);
  position: fixed;
  top: 56px;

  .icon {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: var(--light-black-color);
  }
`;

export const MenuName = styled.span`
  margin-top: 5px;
  font-size: 10px;
`;