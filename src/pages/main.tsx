import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import AuthLayout from '@components/auth-layout';
import useFetchMe from '@apis/discord/queries/useMe';

const Container = styled.div``;

const AuthLinkBtn = styled.button`
  display: block;
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
  width: 100%;
  padding: 0.925rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  &:hover {
    transition: background-color 0.25s;
    background-color: #0068d7;
  }
`;

function Main() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { data: meData } = useFetchMe({});

  const onAuthLink = useCallback(() => {
    navigate(`/auth/user?code=${code}`);
  }, []);

  return (
    <AuthLayout
      title="반갑습니다."
      subtitle="만약 고구려 디스코드 서버에 인증이 필요하시면 아래 버튼을 눌러 인증을 진행해주세요."
    >
      {meData?.me && (
        <Container>
          <AuthLinkBtn type="button" onClick={onAuthLink}>
            인증하러가기
          </AuthLinkBtn>
        </Container>
      )}
    </AuthLayout>
  );
}

export default Main;
