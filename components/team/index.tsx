import Image from 'next/image';

import AvatarImage from 'public/img/avatar.png';
import * as S from './style';

const Team = () => {
  return (
    <S.TeamContainer>
      <S.Title>Team</S.Title>
      <S.TeamBox>
        <S.TeamMember>
          <S.MemberImage>
            <Image src={AvatarImage} alt="avartar" />
          </S.MemberImage>
          <S.MemberName>김동현</S.MemberName>
          <S.MemberDescription>컴퓨터학과 16학번</S.MemberDescription>
        </S.TeamMember>
        <S.TeamMember>
          <S.MemberImage>
            <Image src={AvatarImage} alt="avartar" />
          </S.MemberImage>
          <S.MemberName>방태연</S.MemberName>
          <S.MemberDescription>컴퓨터학과 16학번</S.MemberDescription>
        </S.TeamMember>
        <S.TeamMember>
          <S.MemberImage>
            <Image src={AvatarImage} alt="avartar" />
          </S.MemberImage>
          <S.MemberName>성인규</S.MemberName>
          <S.MemberDescription>전기전자공학부 17학번 </S.MemberDescription>
        </S.TeamMember>
        <S.TeamMember>
          <S.MemberImage>
            <Image src={AvatarImage} alt="avartar" />
          </S.MemberImage>
          <S.MemberName>류효곤</S.MemberName>
          <S.MemberDescription>컴퓨터학과 18학번</S.MemberDescription>
        </S.TeamMember>
      </S.TeamBox>
    </S.TeamContainer>
  );
};

export default Team;
