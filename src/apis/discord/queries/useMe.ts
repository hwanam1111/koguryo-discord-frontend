import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import apiClient from '@libs/api-client';
import queryKeys from '@constants/query-keys';
import { FetchMeInput, FetchMeOutput } from '@apis/discord/dtos/fetch-me.dto';
import { AUTH_DATA } from '@constants/local-storage';

async function fetchMe({ accessToken, tokenType }: Required<FetchMeInput>) {
  const result = await apiClient({
    url: `/discord/me?accessToken=${accessToken}&tokenType=${tokenType}`,
    method: 'GET',
  });

  return result;
}

function useFetchMe(
  fetchMeInput?: FetchMeInput,
): UseQueryResult<FetchMeOutput, AxiosError<FetchMeOutput>> {
  const authData = JSON.parse(localStorage.getItem(AUTH_DATA));
  const accessToken = fetchMeInput?.accessToken || authData?.accessToken;
  const tokenType = fetchMeInput?.tokenType || authData?.tokenType;

  return useQuery(queryKeys.ME, () => fetchMe({ accessToken, tokenType }), {
    select: ({ data }) => data,
    enabled: !!accessToken && !!tokenType,
  });
}

export default useFetchMe;
