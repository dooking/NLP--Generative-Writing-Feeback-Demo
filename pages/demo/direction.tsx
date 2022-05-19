import React, { useState } from 'react';
import * as S from 'styles/index.style';
import Header from '../../components/header';
import Problem from 'components/problem';
import Writing from 'components/Writing';
import Review from 'components/Review';
import { Steps, Button } from 'antd';
const { Step } = Steps;

const Direction = () => {
  const [step, setStep] = useState(0);

  const stepHandler = (current: number) => {
    console.log('onChange:', current);
    setStep(current);
  };

  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Steps current={step} type="navigation">
          <Step title="Step 1" description="Reading Passage" />
          <Step title="Step 2" description="Writing" />
          <Step title="Step 3" description="Review" />
        </Steps>
        {step == 0 ? (
          <Problem onChange={stepHandler} step={step} />
        ) : step == 1 ? (
          <Writing onChange={stepHandler} step={step} />
        ) : (
          <Review onChange={stepHandler} />
        )}
      </S.MainContainer>
    </S.Container>
  );
};

export default Direction;
