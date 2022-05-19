import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/Link';
import LogoImage from 'public/logo.jpg';
import { Button } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import * as S from './style';

const Writing = ({ onChange, step }: any) => {
  const [word, setWord] = useState('');
  return (
    <S.DemoContainer>
      <S.WritingBox>
        <S.WritingInput
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <S.Count>{word.length} / 500 </S.Count>
      </S.WritingBox>
      <S.ButtonBox>
        <Button type="primary" onClick={() => onChange(0)}>
          <CaretLeftOutlined />
          Previous Step
        </Button>
        <Button type="primary" onClick={() => onChange(2)}>
          Next Step
          <CaretRightOutlined />
        </Button>
      </S.ButtonBox>
    </S.DemoContainer>
  );
};

export default Writing;
