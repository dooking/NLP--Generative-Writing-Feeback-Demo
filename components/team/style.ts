import styled from 'styled-components';
import { theme, media } from 'styles/theme';

export const TeamContainer = styled.div`
  padding: 0px 150px;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const TeamBox = styled.div`
  display: flex;
  margin-bottom: 32px;
  justify-content: space-evenly;
`;

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
  & > span {
    width: 200px !important;
    height: 200px !important;
  }
  img {
    object-fit: cover;
  }
`;
export const MemberName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const MemberDescription = styled.div`
  font-size: 1.2rem;
  color: gray;
`;
