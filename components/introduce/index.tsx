import Image from 'next/image';
import WaveImage from 'public/img/line2.jpeg';
import WritingImage from 'public/img/essay.jpg';
import * as S from './style';

const Introduce = () => {
  return (
    <S.IntroduceContainer>
      <S.TextBox>
        <S.TitleText>Towards Generative</S.TitleText>
        <S.TitleText>Writing Feedback</S.TitleText>
        <S.Description>
          Compose bold, clear, mistake-free writing with Grammarly’s new
          AI-powered desktop app.
        </S.Description>
      </S.TextBox>
      <S.DemoBox>
        <S.WritingImageBox>
          <Image src={WritingImage} />
        </S.WritingImageBox>
      </S.DemoBox>
    </S.IntroduceContainer>
  );
};

export default Introduce;
