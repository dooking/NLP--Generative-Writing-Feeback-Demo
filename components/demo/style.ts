import styled from 'styled-components';
import { theme, media } from 'styles/theme';

export const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 150px;
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #f0f0f1;
`;

export const DemoTitle = styled.div`
  font-size: 3rem;
  margin-bottom: 32px;
`;

export const DemoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProblemBox = styled.div`
  width: 400px;
  height: 250px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  background-color: white;
  border-radius: 12px;
  padding: 24px;
`;
export const ProblemTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 24px;
`;
export const ProblemDescription = styled.div`
  margin-bottom: 8px;
  color: #aeaeae;
  font-size: 1.1rem;
`;

export const TempDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150px;
`;

export const ProblemDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const DemoBtn = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  color: white;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px 16px;
  text-align: center;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const WritingImageBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  & > span {
    border-radius: 12px;
    width: 150px !important;
    height: 150px !important;
  }
  img {
    object-fit: cover;
  }
`;
