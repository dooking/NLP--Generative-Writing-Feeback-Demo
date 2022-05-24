import Image from 'next/image';
import Link from 'next/Link';
import LogoImage from 'public/logo.jpg';
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Link href="/">
        <S.WaveImageBox>
          <Image src={LogoImage} />
        </S.WaveImageBox>
      </Link>
      <S.Navbar>
        <Link href="/demo">
          <S.NavbarLink>Demo</S.NavbarLink>
        </Link>
        <S.NavbarLink>Team</S.NavbarLink>
      </S.Navbar>
    </S.HeaderContainer>
  );
};

export default Header;
