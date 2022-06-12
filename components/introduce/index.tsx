import Image from 'next/image';
import WaveImage from 'public/img/line2.jpeg';
import WritingImage from 'public/img/essay.jpg';
import * as S from './style';

const Introduce = () => {
  return (
    <S.IntroduceContainer>
      <S.TextBox>
        <S.TitleText>A Dataset and Baseline for</S.TitleText>
        <S.TitleText> Automated</S.TitleText>
        <S.TitleText> Essay Correction</S.TitleText>
        <S.Description>
          Writing essay and AI can help you to edit your essay.
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
