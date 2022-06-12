import React, { useState } from 'react';
import { Button } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import * as S from './style';

const Problem = ({ onChange, step }: any) => {
  return (
    <S.DemoContainer>
      <S.ProblemBox>
        <S.Problem>Question</S.Problem>
        <S.ProblemText>
          <S.ProblemSpan>
            Some people believe that students should be given one long vacation
            each year. Others believe that students should have several short
            vacations throughout the year. Which view do you agree with?
          </S.ProblemSpan>
          <S.ProblemSpan>
            Use specific reasons and examples to support your answer. Be sure to
            use your own words. Do not use memorized examples.
          </S.ProblemSpan>
        </S.ProblemText>
      </S.ProblemBox>
      <S.ReadingBox>
        <S.Reading>Idea Suggestion</S.Reading>
        <S.ReadingText>
          1) Many Short Vacation
          <S.TempSpan>
            - Allows students time to recover between quarters
          </S.TempSpan>
          <S.TempSpan>- More time for building maintenance</S.TempSpan>
          <S.TempSpan>- Students forget over long breaks</S.TempSpan>
          2) 1 long vacation :<S.TempSpan>- Can take long trips</S.TempSpan>
          <S.TempSpan>- Can study overseas Students</S.TempSpan>
          <S.TempSpan>- Can help with family farms</S.TempSpan>
        </S.ReadingText>
      </S.ReadingBox>
      <Button type="primary" onClick={() => onChange(1)}>
        Next Step
        <CaretRightOutlined />
      </Button>
    </S.DemoContainer>
  );
};

export default Problem;
