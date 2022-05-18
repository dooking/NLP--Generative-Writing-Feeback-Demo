import Image from 'next/image';
import Link from 'next/Link';
import LogoImage from 'public/logo.jpg';
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.WaveImageBox>
        <Image src={LogoImage} />
      </S.WaveImageBox>
      <S.Navbar>
        <S.NavbarLink>Demo</S.NavbarLink>
        <S.NavbarLink>Team</S.NavbarLink>
      </S.Navbar>
    </S.HeaderContainer>
  );
};

export default Header;
