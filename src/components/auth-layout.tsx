import { AUTH_CODE, AUTH_DATA } from '@constants/local-storage';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetchMe from '@apis/discord/queries/useMe';
import useDiscordAuth from '@apis/discord/queries/useDiscordAuth';
import Footer from './footer';

const Overlay = styled.div`
  background-color: #303337;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

const RootContainer = styled.div``;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const ProfileImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
`;

const ProfileName = styled.span`
  font-size: 1.25rem;
  font-weight: 900;
  color: #fff;

  & > small {
    font-size: 1rem;
    font-weight: 500;
    color: #b9bbbe;
  }
`;

const CardBlock = styled.div`
  margin-top: 1rem;
  background-color: #000000c4;
  padding: 3.25rem 1.875rem;
  border-radius: 0.25rem;
  width: 35rem;
  display: flex;
  flex-flow: column;
  gap: 3rem;
`;

const CardTitleBlock = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
`;

const CardTitle = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
`;

const CardSubtitle = styled.h2`
  color: #d8d8d8;
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.25;
  word-break: keep-all;
`;

function returnAuthErrMessage(code: string): React.ReactNode {
  if (code === 'no-code') {
    return (
      <div>
        <p>인증 코드가 없습니다.</p>
        <p>디스코드 링크를 통해 다시 접속해주세요.</p>
      </div>
    );
  }

  if (code === 'expired-token') {
    return (
      <div>
        <p>인증 시간이 만료되었습니다.</p>
        <p>디스코드 링크를 통해 다시 접속해주세요.</p>
      </div>
    );
  }

  if (code === 'not-authorized') {
    return (
      <div>
        <p>인증되지 않은 유저입니다.</p>
        <p>디스코드 계정 인증을 먼저 진행해주세요.</p>
      </div>
    );
  }

  return (
    <div>
      <p>서버에러가 발생하였습니다.</p>
      <p>관리자에게 문의 바랍니다. (Err code: 10010)</p>
    </div>
  );
}

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
  subtitle?: string | React.ReactNode;
}

function AuthLayout({ children, title, subtitle }: LayoutProps) {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { data: authData, error: authError } = useDiscordAuth({ code });
  const { data: meData, error: meError } = useFetchMe({
    accessToken: authData?.authUser.access_token,
    tokenType: authData?.authUser.token_type,
  });

  useEffect(() => {
    const existCode = localStorage.getItem(AUTH_CODE);
    if (authData && existCode !== code) {
      localStorage.setItem(AUTH_CODE, code);
    }
  }, [authData]);

  useEffect(() => {
    if (authData?.authUser) {
      const { access_token: accessToken, token_type: tokenType } =
        authData.authUser;

      localStorage.setItem(
        AUTH_DATA,
        JSON.stringify({
          accessToken,
          tokenType,
        }),
      );
    }
  }, [authData]);

  if (!code || authError || meError) {
    return (
      <Overlay>
        <RootContainer>
          <CardBlock>
            <CardTitleBlock>
              <CardTitle>오류가 발생했습니다.</CardTitle>
              <CardSubtitle>
                {returnAuthErrMessage(
                  !code ? 'no-code' : authError?.response?.data.error,
                )}
                {meError && (
                  <div>
                    <p>서버에러가 발생하였습니다.</p>
                    <p>관리자에게 문의 바랍니다. (Err code: 10011)</p>
                  </div>
                )}
              </CardSubtitle>
            </CardTitleBlock>
            {children}
          </CardBlock>
        </RootContainer>
      </Overlay>
    );
  }

  return (
    <Overlay>
      <RootContainer>
        {meData?.me && (
          <>
            <ProfileBlock>
              <ProfileImg
                src={
                  meData.me.avatar
                    ? `https://cdn.discordapp.com/avatars/${meData.me.id}/${meData.me.avatar}.png`
                    : '/default_profile_img.png'
                }
                alt="profile"
              />
              <ProfileName>
                {meData.me.username}
                <small>#{meData.me.discriminator}</small>
              </ProfileName>
            </ProfileBlock>
            <CardBlock>
              <CardTitleBlock>
                <CardTitle>{title}</CardTitle>
                {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
              </CardTitleBlock>
              {children}
            </CardBlock>
          </>
        )}
        <Footer />
      </RootContainer>
    </Overlay>
  );
}

AuthLayout.defaultProps = {
  children: '',
  subtitle: '',
};

export default AuthLayout;
