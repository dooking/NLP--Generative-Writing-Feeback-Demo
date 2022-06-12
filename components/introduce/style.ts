import styled from 'styled-components';
import { theme, media } from 'styles/theme';

export const IntroduceContainer = styled.div`
  display: flex;
  padding: 0px 150px;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  background-color: #f0f0f1;
`;

export const TextBox = styled.div`
  z-index: 100;
  width: 500px;
`;
export const WaveImageBox = styled.div`
  width: 100vw;
  position: absolute;
  left: 0;
  opacity: 0.5;
  & > span {
    width: 100vw !important;
    height: 400px !important;
  }
  img {
    object-fit: cover;
  }
`;

export const TitleText = styled.div`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 16px;
`;
export const Description = styled.div`
  font-size: 1.3rem;
  word-break: keep-all;
  letter-spacing: 1px;
  line-height: 25px;
  margin-bottom: 32px;
  margin-top: 32px;
`;
export const DemoBtn = styled.div`
  width: 150px;
  background-color: green;
  color: white;
  border-radius: 8px;
  padding: 16px 16px;
  text-align: center;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const DemoBox = styled.div``;
export const WritingImageBox = styled.div`
  width: 500px;
  & > span {
    width: 500px !important;
    height: 300px !important;
    border-radius: 24px;
  }
  img {
    object-fit: contain;
  }
`;
