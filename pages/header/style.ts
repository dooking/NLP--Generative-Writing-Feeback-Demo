import styled from 'styled-components';
import { theme, media } from 'styles/theme';

export const HeaderContainer = styled.div`
  height: 80px;
  padding: 0px 150px;
  display: flex;
  justify-content: space-between;
`;
export const WaveImageBox = styled.div`
  width: 100px;
  & > span {
    width: 100px !important;
    height: 70px !important;
  }
  img {
    object-fit: cover;
  }
`;

export const Navbar = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarLink = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;
