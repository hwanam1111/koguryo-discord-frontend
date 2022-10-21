import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';
import apiClient from '@libs/api-client';
import {
  KartriderAuthInput,
  KartriderAuthOutput,
} from '@apis/kartrider/dtos/auto.dto';

const kartriderAuth = async (
  input: KartriderAuthInput,
): Promise<KartriderAuthOutput> => {
  const { data } = await apiClient({
    url: `/kartrider/users/auth`,
    method: 'POST',
    data: input,
  });
  return data;
};

export default function usdKartriderAuth(): UseMutationResult<
  KartriderAuthOutput,
  AxiosError<KartriderAuthOutput>,
  KartriderAuthInput
> {
  return useMutation(kartriderAuth);
}
