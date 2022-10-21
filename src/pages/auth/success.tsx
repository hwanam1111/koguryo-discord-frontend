import AuthLayout from '@components/auth-layout';

function AuthSuccess() {
  return (
    <AuthLayout
      title="인증이 완료되었습니다."
      subtitle="이제 창을 닫고 디스코드로 돌아가주세요."
    />
  );
}

export default AuthSuccess;
