import styled, { css } from 'styled-components';

export const Navbar = styled.header<{
  scrolled: boolean;
}>`
  width: 100%;
  max-width: 100%;
  min-height: 4.5vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  transition: all 0.5s ease;
  z-index: 100;
  padding: 0 40px;

  ${({ scrolled }) =>
    scrolled
      ? css`
          position: fixed;
          top: 0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        `
      : ''}
`;

export const Navigation = styled.nav`
  ul {
    box-sizing: border-box;
    list-style-type: none;
    display: flex;
    min-height: 4.5vh;
    justify-content: flex-end;
    align-items: center;

    li {
      text-align: center;
      padding: 0.5em;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;

export const Logo = styled.div`
  width: 50px;

  img {
    width: 150px;
  }
`;
