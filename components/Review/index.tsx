import Image from 'next/image';
import React, { useState } from 'react';
import LogoImage from 'public/logo.jpg';
import { Button, Typography, Progress, Popover } from 'antd';
const { Text, Link } = Typography;

import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import * as S from './style';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function callback(key: any) {
  console.log(key);
}

const Review = ({ onChange, step }: any) => {
  const [word, setWord] = useState('');

  const content = (
    <div>
      <p>all various education systems {'→'} various education system </p>
    </div>
  );
  const content2 = (
    <div>
      <p>student’s {'→'} students’ </p>
    </div>
  );
  const content3 = (
    <div>
      <p>sentence deleted</p>
    </div>
  );
  const content4 = (
    <div>
      <p>one student’s {'→'} a student’s</p>
    </div>
  );
  const content6 = (
    <div>
      <p>one long {'→'} a long</p>
    </div>
  );
  const content5 = (
    <div>
      <p>our students {'→'} students</p>
    </div>
  );
  const content7 = (
    <div>
      <p>own personal {'→'} personal</p>
    </div>
  );
  const content8 = (
    <div>
      <p>an evidence {'→'} evidence</p>
    </div>
  );
  const content9 = (
    <div>
      <p>was known {'→'} was known as</p>
    </div>
  );
  const content10 = (
    <div>
      <p>before {'→'} by</p>
    </div>
  );
  const content11 = (
    <div>
      <p>
        a new breathing to renew my abilities {'→'} breathing anew, an
        opportunity to renew my abilities
      </p>
    </div>
  );
  const content12 = (
    <div>
      <p>comrehending {'→'} comprehending</p>
    </div>
  );
  const content13 = (
    <div>
      <p>how diversity of {'→'} how a diversity of </p>
    </div>
  );
  const content14 = (
    <div>
      <p>compitit {'→'} competitions</p>
    </div>
  );

  return (
    <S.DemoContainer>
      <S.Title>Overview</S.Title>
      <S.ResultBox>
        <Progress type="circle" percent={90} format={(percent) => `30 / 50`} />
        <S.Progress>
          <S.ProgressTitle>9 Grammer is inaccurate</S.ProgressTitle>
          <Progress
            percent={70}
            status="exception"
            strokeColor="#9c6baf"
            showInfo={false}
          />
          <S.ProgressTitle>2 Voca Issue</S.ProgressTitle>
          <Progress
            percent={10}
            status="exception"
            strokeColor="rgb(243 103 103);"
            showInfo={false}
          />
          <S.ProgressTitle>2 Punctuation Issue</S.ProgressTitle>
          <Progress
            percent={10}
            status="exception"
            strokeColor="#87d068"
            showInfo={false}
          />
          <S.ProgressTitle>2 Spelling Issue</S.ProgressTitle>
          <Progress
            percent={10}
            status="exception"
            strokeColor="#adafac"
            showInfo={false}
          />
        </S.Progress>
      </S.ResultBox>

      <S.Title>Review</S.Title>
      <S.WritingBox>
        <S.Sentence>Nowadays,</S.Sentence>
        <Popover content={content} title="Voca" trigger="hover">
          <Text mark>all various education systems</Text>
        </Popover>
        <S.Sentence>
          have interested about the arrangement of our students life in way
          allow them get more benifited of their schooling life
        </S.Sentence>

        <S.Sentence>One of these factors is </S.Sentence>
        <Popover content={content2} title="wc_punc" trigger="hover">
          <Text mark>student's</Text>
        </Popover>
        <S.Sentence> vacation life. </S.Sentence>

        <S.Sentence>
          I agree with the idea that one long vacation is required for
        </S.Sentence>
        <Popover content={content5} title="gr_acc" trigger="hover">
          <Text strong> our students</Text>
        </Popover>
        <S.Sentence>
          {' '}
          I feel this way for two reasons which I will explore in the following
          essay.
        </S.Sentence>

        <S.Sentence>To begin with,</S.Sentence>
        <Popover content={content4} title="gr_acc" trigger="hover">
          <Text mark>one student's</Text>
        </Popover>
        <S.Sentence> long trip teaching life needs</S.Sentence>
        <S.Sentence>To begin with,</S.Sentence>
        <Popover content={content6} title="gr_acc" trigger="hover">
          <Text mark>one long</Text>
        </Popover>
        <S.Sentence> vacation life.</S.Sentence>

        <S.Sentence>My </S.Sentence>
        <Popover content={content7} title="gr_acc" trigger="hover">
          <Text mark>own personal</Text>
        </Popover>
        <S.Sentence> experience is compelling an</S.Sentence>
        <Popover content={content8} title="gr_acc" trigger="hover">
          <Text mark>evidence</Text>
        </Popover>
        <S.Sentence> of this topic.</S.Sentence>

        <S.Sentence>Through my schooling life, I</S.Sentence>
        <Popover content={content9} title="gr_acc" trigger="hover">
          <Text mark>was known</Text>
        </Popover>
        <S.Sentence>one of clever students</S.Sentence>

        <S.Sentence>Through my schooling life, I</S.Sentence>
        <Popover content={content10} title="gr_acc" trigger="hover">
          <Text mark>before</Text>
        </Popover>
        <S.Sentence>my family and teachers.</S.Sentence>

        <S.Sentence>So, the vacation for me was like</S.Sentence>
        <Popover
          content={content11}
          title="gr_acc, voca, wc_punc"
          trigger="hover"
        >
          <Text mark>a new breathing to renew my abilities</Text>
        </Popover>
        <S.Sentence> and activities. </S.Sentence>
        <S.Sentence>
          On the other hand, physical activity is considered an important factor
          for strengthening our body.{' '}
        </S.Sentence>

        <S.Sentence>Furthermore, I believe that all of us</S.Sentence>
        <Popover content={content12} title="wc_sp" trigger="hover">
          <Text mark>comrehending</Text>
        </Popover>
        <Popover content={content13} title="gr_acc" trigger="hover">
          <Text mark>how diversity of</Text>
        </Popover>
        <S.Sentence>
          {' '}
          sports and other activities would help our students and make them in
          connected road for presenting all abilities.
        </S.Sentence>

        <S.Sentence>
          For instance, my brother through these activities won in swimming
        </S.Sentence>
        <Popover content={content14} title="wc_sp" trigger="hover">
          <Text mark>compitit</Text>
        </Popover>
      </S.WritingBox>

      <S.Title>Details</S.Title>
      <S.ReviewBox>
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel
            header="Nowadays, all various education systems have interested about the arrangement of our students life in way
            allow them get more benifited of their schooling life"
            key="1"
          >
            <span>Nowadays,</span>
            <Text mark>various education system</Text>
            <span>
              {' '}
              have interested about the arrangement of our students life in way
              allow them get more benifited of their schooling life
            </span>
          </Panel>
          <Panel
            header="One of these factors is student's vacation life."
            key="2"
          >
            <span>One of these factors is </span>
            <Text mark>students’</Text>
            <span> vacation life.</span>
          </Panel>
          <Panel
            header=" I agree with the idea that one long vacation is required for our students I feel this way for two reasons which I will explore in the following
            essay."
            key="3"
          >
            <span>
              I agree with the idea that one long vacation is required for
            </span>
            <Text mark>students</Text>
            <span>
              {' '}
              I feel this way for two reasons which I will explore in the
              following essay.
            </span>
          </Panel>
          <Panel
            header="To begin with,one student's long trip teaching life needs"
            key="4"
          >
            <span>
              They can provide work, but people from the region often rely too
              much on fishing for their{' '}
            </span>
            <Text mark>livelyhoods.</Text>
          </Panel>
          <Panel header="To begin with,one long vacation life." key="5">
            <span>
              But, the worst aspect of aquaculture is that it pressures the wild
              fish,{' '}
            </span>
            <Text mark>population. </Text>
            <span>despite what the article says.</span>
          </Panel>
          <Panel
            header="My own personal experience is compelling anevidence of this topic."
            key="6"
          >
            <span>They need a lot of fish in order to replace </span>
            <Text mark>a wild fish,</Text>
            <span> especially because the animal farms take their food.</span>
          </Panel>
          <Panel
            header="Through my schooling life, Iwas knownone of clever studentsThrough my schooling life, Ibeforemy family and teachers."
            key="7"
          >
            <span>They need a lot of fish in order to replace </span>
            <Text mark>a wild fish,</Text>
            <span> especially because the animal farms take their food.</span>
          </Panel>
          <Panel
            header="So, the vacation for me was likea new breathing to renew my abilities and activities."
            key="8"
          >
            <span>They need a lot of fish in order to replace </span>
            <Text mark>a wild fish,</Text>
            <span> especially because the animal farms take their food.</span>
          </Panel>
          <Panel
            header="On the other hand, physical activity is considered an important factor for strengthening our body."
            key="9"
          >
            <span>They need a lot of fish in order to replace </span>
            <Text mark>a wild fish,</Text>
            <span> especially because the animal farms take their food.</span>
          </Panel>
          <Panel
            header="Furthermore, I believe that all of uscomrehendinghow diversity of sports and other activities would help our students and make them in connected road for presenting all abilities"
            key="10"
          >
            <span>They need a lot of fish in order to replace </span>
            <Text mark>a wild fish,</Text>
            <span> especially because the animal farms take their food.</span>
          </Panel>
          <Panel
            header=".For instance, my brother through these activities won in swimmingcompitit"
            key="11"
          >
            <span>They need a lot of fish in order to replace </span>
            <Text mark>a wild fish,</Text>
            <span> especially because the animal farms take their food.</span>
          </Panel>
        </Collapse>
      </S.ReviewBox>
      <Button type="primary" onClick={() => onChange(1)}>
        <CaretLeftOutlined />
        Previous Step
      </Button>
    </S.DemoContainer>
  );
};

export default Review;
