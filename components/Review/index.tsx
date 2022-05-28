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
function callback(key) {
  console.log(key);
}

const Review = ({ onChange, step }: any) => {
  const [word, setWord] = useState('');

  const content = (
    <div>
      <p>portrays {'→'} portraits </p>
    </div>
  );
  const content2 = (
    <div>
      <p>coastal {'→'} costal </p>
    </div>
  );
  const content3 = (
    <div>
      <p>sentence deleted</p>
    </div>
  );
  const content4 = (
    <div>
      <p>livelihoods {'→'} livelyhoods</p>
    </div>
  );
  const content5 = (
    <div>
      <p>aquaculture is not that good for local economies.</p>
    </div>
  );

  return (
    <S.DemoContainer>
      <S.Title>Overview</S.Title>
      <S.ResultBox>
        <Progress type="circle" percent={90} format={(percent) => `40 / 50`} />
        <S.Progress>
          <S.ProgressTitle>5 Voca Issue</S.ProgressTitle>
          <Progress
            percent={50}
            status="exception"
            strokeColor="rgb(243 103 103);"
            showInfo={false}
          />
          <S.ProgressTitle>3 Sentence Deleted</S.ProgressTitle>
          <Progress
            percent={30}
            status="exception"
            strokeColor="#108ee9"
            showInfo={false}
          />
          <S.ProgressTitle>2 Conjunction Issue</S.ProgressTitle>
          <Progress
            percent={20}
            status="exception"
            strokeColor="#87d068"
            showInfo={false}
          />
        </S.Progress>
      </S.ResultBox>

      <S.Title>Review</S.Title>
      <S.WritingBox>
        <S.Sentence>
          The lecture explains that aquaculture is not as great as the article{' '}
        </S.Sentence>
        <Popover content={content} title="Voca" trigger="hover">
          <Text mark>portraits</Text>
        </Popover>

        <S.Sentence> it to be. </S.Sentence>
        <S.Sentence>First, fish farming may help protect </S.Sentence>
        <Popover content={content2} title="wc_sp" trigger="hover">
          <Text mark>coastal</Text>
        </Popover>
        <S.Sentence>
          {' '}
          areas from pollution, but they also alter the ecosystem, destroying
          natural habitats.
        </S.Sentence>
        <S.Sentence>Secondly, </S.Sentence>
        <Popover content={content5} title="wc_sp" trigger="hover">
          <Text strong>
            {' '}
            the writer suggests aquaculture is good for local economies,
          </Text>
        </Popover>
        <S.Sentence>
          however, the lecturer states that it is not that good.
        </S.Sentence>

        <S.Sentence>
          They can provide work, but people from the region often rely too much
          on fishing for their
        </S.Sentence>
        <Popover content={content4} title="wc_sp" trigger="hover">
          <Text mark>livelihoods</Text>
        </Popover>
        <S.Sentence>
          {' '}
          Fish farming can't provide jobs to sustain an entire region, so it can
          actually increase unemployment in the population because there's no
          other way for them to get a job. The fish farming can't provide jobs
          to sustain an entire region, so it can actually enforce unenployment
          on the population, because there's no other way for them to get a job.
        </S.Sentence>

        <Popover content={content3} title="td_irr_info" trigger="hover">
          <Text delete>
            So, despite the article saying that fish farming is a great way to
            take pressure off the animals and create a fish controled
            enviromment, the lecture says that that's not the case.{' '}
          </Text>
        </Popover>
        <Popover content={content3} title="td_irr_info" trigger="hover">
          <Text delete>
            Aquaculture actually makes the ecossistem worse for the fish.
          </Text>
        </Popover>
      </S.WritingBox>

      <S.Title>Details</S.Title>
      <S.ReviewBox>
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel
            header="The lecture explains that aquaculture is not as great as the article portrays it to be. "
            key="1"
          >
            <span>
              The lecture explains that aquaculture is not as great as the
              article{' '}
            </span>
            <Text mark>portraits</Text>
            <span> it to be.</span>
          </Panel>
          <Panel
            header="First, fish farming may help protect coastal areas from pollution, but they also alter the ecosystem, destroying natural habitats"
            key="2"
          >
            <span>First, fish farming may help protect </span>
            <Text mark>costal</Text>
            <span>
              {' '}
              areas from pollution, but they also alter the ecossistem,
              destroying natural habitats.
            </span>
          </Panel>
          <Panel
            header="Secondly, the writer suggests aquaculture is good for local economies, however, the lecturer states that it is not that good."
            key="3"
          >
            <Text mark>Secondly,</Text>
            <span> aquaculture is not that good for local economies.</span>
          </Panel>
          <Panel
            header="They can provide work, but people from the region often rely too much on fishing for their livelihoods. "
            key="4"
          >
            <span>
              They can provide work, but people from the region often rely too
              much on fishing for their{' '}
            </span>
            <Text mark>livelyhoods.</Text>
          </Panel>
          <Panel
            header="Fish farming can't provide jobs to sustain an entire region, so it can actually increase unemployment in the population because there's no other way for them to get a job."
            key="5"
          >
            <span>
              But, the worst aspect of aquaculture is that it pressures the wild
              fish,{' '}
            </span>
            <Text mark>population. </Text>
            <span>despite what the article says.</span>
          </Panel>
          <Panel
            header="The fish being farmed are mostly predatory species and eat other fish to live, meaning more wild fish will be caught and processed into feed for the fish farms."
            key="6"
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
