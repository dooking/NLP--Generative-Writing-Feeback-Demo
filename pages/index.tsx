import * as S from 'styles/index.style';

import Header from '../components/header';
import Introduce from '../components/introduce';
import Demo from '../components/demo';
import Team from '../components/team';
import Reference from '../components/reference';

const Index = () => {
  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Introduce />
        <Demo />
        <Team />
        <Reference />
      </S.MainContainer>
    </S.Container>
  );
};

export default Index;
