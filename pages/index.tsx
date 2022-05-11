import styled from 'styled-components';
import Link from 'next/Link';
import * as S from 'styles/index.style';

import Header from './header';
import Introduce from './introduce';
const Index = () => {
  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Introduce />
      </S.MainContainer>
    </S.Container>
  );
};

export default Index;
