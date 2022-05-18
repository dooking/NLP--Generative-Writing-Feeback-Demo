import styled from 'styled-components';
import Link from 'next/Link';
import * as S from 'styles/index.style';

import Header from '../components/header';
import Introduce from '../components/introduce';
import Demo from '../components/demo';

const Index = () => {
  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Introduce />
        <Demo />
      </S.MainContainer>
    </S.Container>
  );
};

export default Index;
