import React, { useState } from 'react';
import * as S from 'styles/index.style';
import Header from '../../components/header';
import Problem from 'components/problem';
import { Steps } from 'antd';
const { Step } = Steps;

const Direction = () => {
  const [step, setStep] = useState(0);

  const stepHandler = (current: number) => {
    setStep(current);
  };

  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Steps
          type="navigation"
          size="small"
          current={step}
          onChange={stepHandler}
          className="site-navigation-steps"
        >
          <Step title="Step 1" status="finish" description="Reading Passage" />
          <Step title="Step 2" status="process" description="Conversation" />
          <Step title="Step 3" status="wait" description="Writing & Review" />
        </Steps>
        <Problem />
      </S.MainContainer>
    </S.Container>
  );
};

export default Direction;
