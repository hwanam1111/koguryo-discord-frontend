import { useCallback } from 'react';
import styled from 'styled-components';
import AuthLayout from '@components/auth-layout';

const Container = styled.div``;

const CloseBrowerBtn = styled.button`
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

function AuthSuccess() {
  const onCloseBrower = useCallback(() => {
    window.close();
  }, []);

  return (
    <AuthLayout
      title="인증이 완료되었습니다."
      subtitle="이제 창을 닫고 디스코드로 돌아가주세요."
    >
      <Container>
        <CloseBrowerBtn type="button" onClick={onCloseBrower}>
          창 닫기
        </CloseBrowerBtn>
      </Container>
    </AuthLayout>
  );
}

export default AuthSuccess;
