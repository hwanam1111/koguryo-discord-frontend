import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthLayout from '@components/auth-layout';
import useFetchMe from '@apis/discord/queries/useMe';
import useSearchKartUserByNickname from '@apis/kartrider/queries/useSearchKartUserByNickname';
import FormBlock from '@components/form-block';
import FormLabel from '@components/form-label';
import FormInput from '@components/form-input';
import FormSubmitButton from '@components/form-submit-button';
import FormError from '@components/form-error';
import usdKartriderAuth from '@apis/kartrider/mutations/usdKartriderAuth';

const Form = styled.form``;

const SubmitButton = styled(FormSubmitButton)`
  margin-top: 1rem;
`;

interface AuthUserForm {
  nickname: string;
}

function AuthUser() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { data: meData } = useFetchMe({});

  const formSchema = Yup.object().shape({
    nickname: Yup.string()
      .required('닉네임을 입력해주세요.')
      .max(12, '닉네임은 12자를 넘을 수 없습니다.'),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid: isFormValid, errors: formErrors },
  } = useForm<AuthUserForm>({
    mode: 'all',
    resolver: yupResolver(formSchema),
  });
  const {
    isFetching: isSearchKartUserFetcingisFetching,
    data: kartUserData,
    error: kartUserError,
    refetch: refetchKartUser,
  } = useSearchKartUserByNickname({
    nickname: watch().nickname,
  });

  const onSubmit = useCallback(async () => {
    if (!isSearchKartUserFetcingisFetching && isFormValid) {
      await refetchKartUser();
    }
  }, [isSearchKartUserFetcingisFetching, isFormValid]);

  const {
    mutate,
    isLoading: isKartAuthLoading,
    error: kartAuthError,
  } = usdKartriderAuth();

  useEffect(() => {
    if (kartUserData?.ok && kartUserData?.user && meData?.me) {
      mutate(
        {
          discordId: meData.me.id,
          discordUsername: meData.me.username,
          kartriderAccessId: kartUserData.user.accessId,
          kartriderNickname: kartUserData.user.name,
        },
        {
          onSuccess: () => {
            navigate(`/auth/success?code=${code}`, { replace: true });
          },
        },
      );
    }
  }, [kartUserData?.user, meData?.me]);

  return (
    <>
      <Helmet>
        <title>Authentication | Koguryo Empire</title>
      </Helmet>
      <AuthLayout
        title="Koguryo Empire 디스코드 인증"
        subtitle={
          <div>
            <p>본인이 사용하는 카트라이더 닉네임을 입력해주세요.</p>
            <p>만약 본인의 닉네임이 아닐 시 서버 제제가 있을 수 있습니다.</p>
          </div>
        }
      >
        {meData?.me && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormBlock>
              <FormLabel isRequired label="닉네임" />
              <FormInput
                type="text"
                placeholder="닉네임을 입력해주세요."
                register={register('nickname')}
                maxLength={12}
                required
              />
              {formErrors.nickname?.message && (
                <FormError message={formErrors.nickname.message} />
              )}
            </FormBlock>
            <SubmitButton
              className="submit-btn"
              text="인증"
              disabled={!isFormValid}
              isLoading={isSearchKartUserFetcingisFetching || isKartAuthLoading}
            />
            {kartUserError?.response.data?.error === 'NotFound' && (
              <FormError message="유저가 존재하지 않습니다." />
            )}
            {kartUserError &&
              kartUserError.response.data?.error !== 'NotFound' && (
                <FormError message="서버에러가 발생하였습니다. 관리자에게 문의 바랍니다. (Err code: 10012)" />
              )}
            {kartAuthError?.response.data?.error === 'already-guest-user' && (
              <FormError message="이미 디스코드와 카트라이더 인증이 완료되었습니다." />
            )}
            {kartAuthError &&
              kartAuthError?.response.data?.error !== 'already-guest-user' && (
                <FormError message="서버에러가 발생하였습니다. 관리자에게 문의 바랍니다. (Err code: 10013)" />
              )}
          </Form>
        )}
      </AuthLayout>
    </>
  );
}

export default AuthUser;
