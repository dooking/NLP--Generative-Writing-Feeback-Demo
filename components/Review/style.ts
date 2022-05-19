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
`;

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
  font-size: 1.2rem;
  line-height: 24px;
  letter-spacing: 2px;
`;
