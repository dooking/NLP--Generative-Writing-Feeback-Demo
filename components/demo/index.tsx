import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/Link';
import WritingImage from 'public/img/writing.jpg';
import EssayImage from 'public/img/essay.jpg';
import * as S from './style';

const Demo = () => {
  const [active, setActive] = useState(false);
  const activeHandler = () => {
    setActive(!active);
  };
  return (
    <S.DemoContainer>
      <S.DemoTitle>Demo</S.DemoTitle>
      <S.DemoBox>
        <S.ProblemBox>
          <S.ProblemTitle>Direction</S.ProblemTitle>
          <S.TempDiv>
            <S.ProblemDiv>
              <S.ProblemDescription>Reading Passage</S.ProblemDescription>
              <S.ProblemDescription>
                Listening Converstaion
              </S.ProblemDescription>
              <S.DemoBtn>Demo</S.DemoBtn>
            </S.ProblemDiv>
            <S.ProblemDiv>
              <S.WritingImageBox>
                <Image src={WritingImage} alt="writing" />
              </S.WritingImageBox>
            </S.ProblemDiv>
          </S.TempDiv>
        </S.ProblemBox>
        <S.ProblemBox>
          <S.ProblemTitle>Essay</S.ProblemTitle>
          <S.TempDiv>
            <S.ProblemDiv>
              <S.ProblemDescription>Reading Problem</S.ProblemDescription>
              <S.ProblemDescription>Writing Essay Form</S.ProblemDescription>
              <S.DemoBtn>Demo</S.DemoBtn>
            </S.ProblemDiv>
            <S.ProblemDiv>
              <S.WritingImageBox>
                <Image src={EssayImage} alt="writing" />
              </S.WritingImageBox>
            </S.ProblemDiv>
          </S.TempDiv>
        </S.ProblemBox>
      </S.DemoBox>
    </S.DemoContainer>
  );
};

export default Demo;
