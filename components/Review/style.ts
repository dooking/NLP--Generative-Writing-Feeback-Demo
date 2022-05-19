import styled from 'styled-components';
import { theme, media } from 'styles/theme';

export const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  margin-top: 32px;
  button {
    width: 180px !important;
    border-radius: 12px;
    height: 40px !important;
    margin-right: auto;
  }
`;

export const WritingBox = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  letter-spacing: 1px;
  font-size: 1.2rem;
  border: 1px solid #d9d9d9;
  background-color: #f9f9f9;
  box-shadow: 1px 2px 2px rgb(0 0 0 / 10%);
  line-height: 40px;
  mark {
    background-color: #ff4d4f;
    padding: 4px;
    color: wheat;
  }
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const Sentence = styled.span``;

export const Count = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: right;
  margin-top: 16px;
`;

export const WritingInput = styled.textarea`
  width: 100%;
  height: 500px;
  background: #e2e2e2;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  border: none;
  resize: none;
  padding: 24px;
  letter-spacing: 2px;
  font-size: 1.3rem;
  line-height: 40px;
`;

export const Progress = styled.div`
  width: 70%;
  & > div > div > div > div {
    height: 20px !important;
  }
  .anticon-close-circle,
  .anticon-check-circle {
    font-size: 20px;
  }
  .ant-progress-status-success {
    margin-bottom: 16px;
  }
`;
export const ProgressTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ResultBox = styled.div`
  border: 1px solid #d9d9d9;
  background-color: #f9f9f9;
  box-shadow: 1px 2px 2px rgb(0 0 0 / 10%);
  margin-bottom: 32px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ReviewBox = styled.div`
  margin-bottom: 32px;
`;
