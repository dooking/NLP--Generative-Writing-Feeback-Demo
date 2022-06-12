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
    margin-left: auto;
  }
`;

export const ProblemBox = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
`;
export const Problem = styled.div`
  font-weight: bold;
  font-family: 'GmarketSansBold', serif;
  font-size: 1.5rem;
  margin-bottom: 16px;
`;
export const ProblemSpan = styled.span`
  font-family: 'GmarketSansBold', serif;
  display: block;
  margin-bottom: 16px;
  font-size: 1.1rem;
`;
export const ProblemText = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  line-height: 30px;
  font-size: 1.2rem;
  word-break: keep-all;
  letter-spacing: 1px;
`;

export const ReadingBox = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;
export const Reading = styled.div`
  font-weight: bold;
  font-family: 'GmarketSansBold', serif;
  font-size: 1.5rem;
  margin-bottom: 16px;
`;
export const ReadingText = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  line-height: 40px;
  font-size: 1.2rem;
  word-break: keep-all;
  letter-spacing: 1px;
`;

export const AnswerContainer = styled.div``;
export const AnswerTitle = styled.div`
  font-weight: bold;
  font-family: 'GmarketSansBold', serif;
  font-size: 1.5rem;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const AnswerArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AnswerTutoringSpan = styled.span`
  background: pink;
  margin-right: 5px;
`;
export const AnswerTutoringSpan2 = styled.span`
  background: #f4523f;
  margin-right: 5px;
`;
export const AnswerSpan = styled.span`
  line-height: 40px;
  font-size: 1.2rem;
  word-break: keep-all;
  letter-spacing: 1px;
`;
export const AnswerBox = styled.div`
  width: 45%;
  height: 300px;
`;
export const TutoringBox = styled.div`
  width: 45%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
`;

export const AnswerInputBox = styled.div``;
export const AnswerInput = styled.textarea`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  border: 1px solid black;
  padding: 16px;
`;
export const SubmitButton = styled.div`
  width: 100px;
  font-size: 1.5rem;
  background: bisque;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  text-align: center;
  padding: 16px;
  float: right;
  margin-top: 16px;
  cursor: pointer;
`;

export const TempSpan = styled.div``;
