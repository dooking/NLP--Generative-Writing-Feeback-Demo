import React, { useState } from 'react';
import { Button, Spin, Space } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import * as S from './style';

const Writing = ({ onChange, step }: any) => {
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false);
  if (loading)
    return (
      <S.SpinBox>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </S.SpinBox>
    );
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
        <Button
          type="primary"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              onChange(2);
            }, 3000);
          }}
        >
          Next Step
          <CaretRightOutlined />
        </Button>
      </S.ButtonBox>
    </S.DemoContainer>
  );
};

export default Writing;
