import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import apiClient from '@libs/api-client';
import queryKeys from '@constants/query-keys';
import {
  DiscordAuthInput,
  DiscordAuthOutput,
} from '@apis/discord/dtos/auth.dto';
import { AUTH_CODE } from '@constants/local-storage';

async function auth({ code }: DiscordAuthInput) {
  const result = await apiClient({
    url: `/discord/auth?code=${code}`,
    method: 'GET',
  });

  return result;
}

function useDiscordAuth(
  discordAuthInput: DiscordAuthInput,
): UseQueryResult<DiscordAuthOutput, AxiosError<DiscordAuthOutput>> {
  const existCode = localStorage.getItem(AUTH_CODE);

  return useQuery(queryKeys.AUTH, () => auth(discordAuthInput), {
    select: ({ data }) => data,
    enabled: !!discordAuthInput.code && existCode !== discordAuthInput.code,
  });
}

export default useDiscordAuth;
