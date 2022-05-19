import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/Link';
import LogoImage from 'public/logo.jpg';
import { Button } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import * as S from './style';

const Problem = ({ onChange, step }: any) => {
  return (
    <S.DemoContainer>
      <S.ProblemBox>
        <S.Problem>Directions</S.Problem>
        <S.ProblemText>
          <S.ProblemSpan>Q. </S.ProblemSpan>
          LanguageTool is your intelligent writing assistant for all common
          browsers and word processors. Write or paste your text here too have
          it checked continuously?
        </S.ProblemText>
      </S.ProblemBox>
      <S.ReadingBox>
        <S.Reading>Reading Passage</S.Reading>
        <S.ReadingText>
          Hemingway App makes your writing bold and clear. The app highlights
          lengthy, complex sentences and common errors; if you see a yellow
          sentence, shorten or split it. If you see a red highlight, your
          sentence is so dense and complicated that your readers will get lost
          trying to follow its meandering, splitting logic — try editing this
          sentence to remove the red. You can utilize a shorter word in place of
          a purple one. Mouse over them for hints. Adverbs and weakening phrases
          are helpfully shown in blue. Get rid of them and pick words with
          force, perhaps. Phrases in green have been marked to show passive
          voice. You can format your text with the toolbar. Paste in something
          you're working on and edit away. Or, click the Write button and
          compose something new.
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
